import fs from "fs";
import pkg from "chalk";
const { red, green, yellow, blue } = pkg;

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
  const duplicateNote = notes.find((note) => {
    //* To see if title already exists
    return note.title === title;
  });

  if (!duplicateNote) {
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
  const notes_to_delete = notes.find((note) => {
    //* To find the note to delete
    return note.title === title;
  });

  if (!notes_to_delete) {
    return red.inverse("Note not found");
  } else {
    notes.splice(notes.indexOf(notes_to_delete), 1);
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
  const note_to_fetch = notes.find((note) => note.title === title);

  return !note_to_fetch ? red.inverse("Note not found") : note_to_fetch;
};

//? Editing Note
const editNote = (title, newTitle, newBody) => {
  const notes = loadNotes();
  const note_to_edit = notes.find((note) => note.title === title);

  if (!note_to_edit) {
    return red.inverse("Note not found!");
  } else if (!newTitle && !newBody) {
    return blue.inverse(
      "No new data found, please provide new data to edit as --newTitle='NEW DATA' or --newBody='NEW BODY'"
    );
  } else {
    if (!newTitle) {
      newTitle = note_to_edit.title;
    }
    if (!newBody) {
      newBody = note_to_edit.body;
    }

    note_to_edit.title = newTitle;
    note_to_edit.body = newBody;

    saveNotes(notes);
    return blue.inverse("Note updated");
  }
};

//? Clear Notes
const clearNotes = () => {
  const notes = loadNotes();

  if (notes.length === 0) {
    return red.inverse("Notepad already empty!");
  } else {
    notes.splice(0, notes.length);
    saveNotes(notes);
    return yellow.inverse("Notepad cleared!");
  }
};

export { addNotes, removeNotes, listNotes, readNote, clearNotes, editNote };
