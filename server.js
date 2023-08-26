const express = require('express');
const cors = require('cors');
const generateData = require('./generate-data');
const asmList = require('./asm-list');

const app = express();
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
