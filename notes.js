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

//* Adding Notes
const addNotes = (title, body) => {
  const notes = loadNotes();
  notes.push({ title: title, body: body });
  return saveNotes(notes);
};

module.exports = { getNotes, addNotes };
