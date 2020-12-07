import fs from "fs";
import pkg from "chalk";
const { red, green, yellow } = pkg;

//? One global function loading notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

//? One global function saving notes
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
  return "Notes Updated";
};

//? Adding Notes
const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    //* To see if title already exists
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    return green.inverse("Notes Saved");
  } else {
    return red.inverse(
      "Title already exists, please choose another title and submit again!"
    );
  }
};

//? Removing Notes
const removeNotes = (title) => {
  const notes = loadNotes();
  const notes_to_delete = notes.filter((note) => {
    //* To find the note to delete
    return note.title === title;
  });

  if (notes_to_delete.length === 0) {
    return red.inverse("Note not found");
  } else {
    notes.splice(notes_to_delete, 1);
    saveNotes(notes);
    return yellow.inverse("Note removed");
  }
};

//? List Notes
const listNotes = () => {
  const notes = loadNotes();
  return notes.length === 0 ? red.inverse("No notes available") : notes;
};

//? Reading Note
const readNote = (title) => {
  const notes = loadNotes();
  const note_to_fetch = notes.filter((note) => note.title === title);

  return note_to_fetch.length === 0
    ? red.inverse("Note not found")
    : note_to_fetch;
};

export { addNotes, removeNotes, listNotes, readNote };
