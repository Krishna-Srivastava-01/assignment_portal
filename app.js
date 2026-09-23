const path = require('node:path');
const FilePath = path.join(__dirname, "./db.js")
const pool = require(FilePath);
const express = require('express');

const app = express();;
app.use(express.json());


app.listen(3000)