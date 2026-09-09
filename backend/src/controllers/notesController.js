import Note from "../models/Note.js";

export async function getAllNotes(request, response) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    response.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNoteById(request, response) {
  try {
    const note = await Note.findById(request.params.id);
    if (!note) return response.status(404).json({ message: "Note not found" });
    response.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(request, response) {
  // Send the notes
  try {
    const { title, content } = request.body;
    const note = new Note({ title: title, content: content });
    const savedNote = await note.save();
    response.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNote(request, response) {
  // Update a note
  try {
    const { title, content } = request.body;
    const updatedNote = await Note.findByIdAndUpdate(
      request.params.id,
      {
        title,
        content,
      },
      { new: true },
    );
    if (!updateNote)
      return response.status(404).json({ message: "Note not found" });
    response.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(request, response) {
  // Update a note
  try {
    const deletedNote = await Note.findByIdAndDelete(request.params.id);
    if (!deleteNote) {
      return response.status(404).json({ message: "Note not found" });
    }
    response.json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}
