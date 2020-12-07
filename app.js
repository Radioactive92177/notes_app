import pkg from "yargs";
const { command: _command, parse } = pkg;
import { addNotes, removeNotes, listNotes, readNote } from "./notes.js";

//? Create add command
_command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    const response = addNotes(argv.title, argv.body);
    console.log(response);
  },
});

//? Create remove command
_command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title of the note to delete",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    const response = removeNotes(argv.title);
    console.log(response);
  },
});

//? Create list command
_command({
  command: "list",
  describe: "List your notes",
  handler: () => {
    const response = listNotes();
    console.table(response);
  },
});

//? Create read command
_command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title of the note to fetch",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    const response = readNote(argv.title);
    console.table(response);
  },
});

//? To initialise YARGS
parse();
