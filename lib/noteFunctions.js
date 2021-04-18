const path = require('path');
const fs = require('fs');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    // return finished code to post route for response
    return note;
}

function validateNotes(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function deleteNote(noteId, notesArray) {
    console.log("This is note ID: " + noteId);
    notesArray.splice(noteId, 1);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;
}

module.exports = {
    createNewNote,
    validateNotes,
    findById,
    deleteNote
};