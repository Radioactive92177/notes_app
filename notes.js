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
  return "Notes Saved";
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
    return saveNotes(notes);
  } else {
    return "Title already exists, please choose another title and submit again!";
  }
};

module.exports = { getNotes, addNotes };
