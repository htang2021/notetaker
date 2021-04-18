const path = require('path');
const fs = require('fs');

// create a note and push into the notesArray and write to db.json file
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    // return finished code to post route for response
    return note;
}

// validates edge cases when values are injected manually with non-string
// values, otherwise they are input as strings
function validateNotes(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

// function to find ID that exists in notesArray
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

// Deletes note element with matching id
function deleteNote(noteId, notesArray) {
    for (let i=0; i < notesArray.length; i++) {
        if (notesArray[i].id === noteId) {
            notesArray.splice(i, 1);
            console.log("Deleted note ID: " + noteId);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({ notes: notesArray }, null, 2)
            );
            return notesArray;
        }
    } 
}

module.exports = {
    createNewNote,
    validateNotes,
    findById,
    deleteNote
};