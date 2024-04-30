const express = require('express');
const countStudents = require('./2-read_file');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const buffer = [];
  const mainLog = console.log;

  console.log = (message) => {
    buffer.push(message);
  };

  buffer.push('This is the list of our students');
  try {
    countStudents(process.argv[2]);

    console.log = mainLog;

    res.send(buffer.join('\n'));
  } catch (err) {
    // Do nothing Here
  }
});

app.listen(port, 'localhost');

module.exports = app;
