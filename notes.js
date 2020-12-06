const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

//? One global function leading notes
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
    return "Notes Saved";
  } else {
    return "Title already exists, please choose another title and submit again!";
  }
};

//? Removing Notes
const removeNotes = (title) => {
  const notes = loadNotes();
  const note_to_delete = notes.find((note) => {
    //* To find the note to delete
    return note.title === title;
  });

  notes.splice(note_to_delete, 1);
  saveNotes(notes);
  return "Note deleted";
};

module.exports = { getNotes, addNotes, removeNotes };
