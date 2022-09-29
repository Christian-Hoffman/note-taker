const express = require('express');
const app = express();
const path = require('path');
const apiRoutes = require('./routes/notes.js');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;

app.use('/api', apiRoutes);

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
