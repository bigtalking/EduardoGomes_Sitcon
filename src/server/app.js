const express = require('express');
const cors = require('cors')
const fs = require('fs');
const path =require('path');

const app = express();

app.use(cors());
app.use(express.json());

const pacients = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/pacientes.json'), 'utf-8', (err, txt) => {
    return(txt);
}));

const profissional = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/profissional.json'), 'utf-8', (err, txt) => {
    return(txt);
}));

const procedimentos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/procedimentos.json'), 'utf-8', (err, txt) => {
    return(txt);
}));


app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
app.get('/pacientes', (req, res) => res.status(200).json(pacients));
app.get('/profissional', (req, res) => res.status(200).json(profissional));
app.get('/procedimentos', (req, res) => res.status(200).json(procedimentos[1]));
app.get('/tipo', (req, res) => res.status(200).json(procedimentos[0]));
app.post('/save', (req, res) => {
    console.log(req.body)
    return res.status(201).json({ message: 'created' })
})

module.exports = app;