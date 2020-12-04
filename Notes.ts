import {
  writeFileSync,
  appendFileSync,
  existsSync,
  readFileSync,
  rm,
} from "fs";

export class Notes {
  fileName: string;

  constructor(fileName: string) {
    this.fileName = `${fileName}.txt`;
  }

  createNotes = (data: string): string => {
    if (existsSync(`./${this.fileName}`)) {
      try {
        appendFileSync(`${this.fileName}`, `\n${data}`);
        return `Data successfully appended in ${this.fileName}`;
      } catch (error) {
        return error;
      }
    } else {
      try {
        writeFileSync(`${this.fileName}`, data);
        return `Data successfuly stored in ${this.fileName}`;
      } catch (error) {
        return error;
      }
    }
  };

  getNotes = (): string => {
    if (existsSync(`./${this.fileName}`)) {
      const data = readFileSync(`./${this.fileName}`, "utf-8");
      return data;
    } else {
      return "File does not exist";
    }
  };

  deleteNotes = (): string => {
    if (existsSync(`./${this.fileName}`)) {
      rm(this.fileName, () => {
        return "FILE";
      });
      return `${this.fileName} has been successfully deleted`;
    } else {
      return "File does not exist";
    }
  };
}
