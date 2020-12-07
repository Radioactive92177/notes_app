# Note Making APP Using NodeJS

### _The following is a backend application, which is used to store notes in a [**json file**](notes.json) and perform certain operations in it. It uses [**yargs**](https://www.npmjs.com/package/yargs) for parsing the command line arguments and [**chalk**](https://www.npmjs.com/package/chalk) for coloring the output._

---

## **Prerequisites**

| Software                   | Version           |
| -------------------------- | ----------------- |
| [Node](https://nodejs.org) | v14.14.0 or above |
| npm                        | v6.14.8 or above  |

---

## **To Run**

```bash
# Bash Code
npm install # To install the required dependencies

node app.js option --arguments
```

### **Available options & their arguments**

| Options  | Arguments required                                |
| -------- | ------------------------------------------------- |
| _list_   | no argument                                       |
| _add_    | _--title_="Desired title" _--body_="Desired body" |
| _remove_ | _--title_="Title of note to delete"               |
| _read_   | _--title_="Title of the note to read"             |

---

## **Sample Execution**

### **_add_**

```bash
node app.js add --title="Shopping" --body="Vegetables,Pens, Condoms"
```

### **_list_**

```bash
node app.js list
```

### **_read_**

```bash
node app.js read --title="Shopping"
```

### **_remove_**

```bash
node remove --title="Shopping"
```

### _Feel free to fork or contribute_
