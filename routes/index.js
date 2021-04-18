const router = require('express').router();
const path = require('path');

const { nanoid } = require('nanoid');
const { notes } = require('../db/db');
const {
    createNewNote,
    validateNotes,
    findById,
    deleteNote}
= require('../lib/noteFunctions');

router.use(express.json());

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    // generates an unique ID from using nanoid npm pkg - length of 10 for this app
    req.body.id = nanoid(10);

    // if any data in req.body is incorrect, send 400 error back
    if (!validateNotes(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        // add note to json file and notes array in this function
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

// route to delete note, by element ID assigned when note is created
router.delete('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        deleteNote(req.params.id, notes);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;