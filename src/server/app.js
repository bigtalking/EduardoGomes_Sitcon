const express = require('express');
const cors = require('cors')
const fs = require('fs');
const path =require('path');

const app = express();

app.use(cors());

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/pacientes.json'), 'utf-8', (err, txt) => {
    return(txt);
}
));

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
app.get('/data', (req, res) => res.status(200).json(data));

module.exports = app;