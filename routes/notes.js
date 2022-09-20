const app = require('express').Router();
const { readFromFile, readAndAppend, writeToFile} = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

app.get('/notes', (req, res) => {
    if (req.method === 'GET') {
        readFromFile('./db/db.json')
        .then((note) => res.json(JSON.parse(note)));
    }
});

app.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const note = {
            title,
            text,
            id: uuid(),
        };
        readAndAppend(note, './db/db.json');
        res.json('Note was added');
    } else {
        throw error;
    }
});

module.exports = api: