"use strict";
exports.__esModule = true;
exports.Notes = void 0;
var fs_1 = require("fs");
var Notes = /** @class */ (function () {
  function Notes(fileName) {
    var _this = this;
    this.createNotes = function (data) {
      if (fs_1.existsSync("./" + _this.fileName)) {
        try {
          fs_1.appendFileSync("" + _this.fileName, "\n" + data);
          return "Data successfully appended in " + _this.fileName;
        } catch (error) {
          return error;
        }
      } else {
        try {
          fs_1.writeFileSync("" + _this.fileName, data);
          return "Data successfuly stored in " + _this.fileName;
        } catch (error) {
          return error;
        }
      }
    };
    this.getNotes = function () {
      if (fs_1.existsSync("./" + _this.fileName)) {
        var data = fs_1.readFileSync("./" + _this.fileName, "utf-8");
        return data;
      } else {
        return "File does not exist";
      }
    };
    this.deleteNotes = function () {
      if (fs_1.existsSync("./" + _this.fileName)) {
        fs_1.rm(_this.fileName, function () {
          return "FILE";
        });
        return _this.fileName + " has been successfully deleted";
      } else {
        return "File does not exist";
      }
    };
    this.fileName = fileName + ".txt";
  }
  return Notes;
})();
exports.Notes = Notes;
