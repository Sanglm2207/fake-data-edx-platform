const express = require('express');
const cors = require('cors');
const path = require('path');
const generateData = require('./generate-data');
const asmList = require('./asm-list');
const view_asm = require('./view_asm');
const view_lab = require('./view_lab');
const view_exam = require('./view_exam');

const app = express();
app.use(express.static(path.join(__dirname, 'mentor')));
const port = 3000;

// Use the cors middleware
app.use(cors());

app.get('/generate-data', (req, res) => {
    const data = generateData();
    res.json(data); 
});

app.get('/asmList', (req, res) => {
    const data = asmList();
    res.json(data);
});

app.get('/view_asm', (req, res) => {
    const data = view_asm();
    res.json(data);
});

app.get('/view_lab', (req, res) => {
    const data = view_lab();
    res.json(data);
});

app.get('/view_exam', (req, res) => {
    const data = view_exam();
    res.json(data);
});

app.get('/booking-mentor', (req, res) => {
    res.sendFile(path.join(__dirname, 'mentor', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
