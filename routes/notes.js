const api = require('express').Router();
const { readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

api.get('/notes', (req, res) => {
    if (req.method == 'GET') {
        readFromFile('./db/db.json')
        .then((data) => res.json(JSON.parse(data)));
    }
});

api.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json('Note was added');
    } else {
        res.error('Failed to add note');
    }
});

module.exports = api;