export const getAllNotes = (request, response) => {
  // Send the notes
  response.status(200).send("You just fetched the notes");
};

export const createNote = (request, response) => {
  // Send the notes
  response.status(201).json({ message: "Note created successfully!" });
};

export const updateNote = (request, response) => {
  // Update a note
  response.status(200).json({ message: "Note updated successfully!" });
};

export const deleteNote = (request, response) => {
  // Update a note
  response.status(200).json({ message: "Note deleted successfully!" });
};
