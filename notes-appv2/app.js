const getNotes = require("./notes");


// challenge: define and use a function in a new file 
// 
// 1. create a new file called notes.js
// 2. create getNotes function that returns "Your notes..."
// 3. export getNotes function
// 4. From app.js, load in call the function printing message to console
const msg = getNotes.getNotes();

console.log(msg);
