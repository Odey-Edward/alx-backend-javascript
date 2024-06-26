const http = require('http');
const countStudents = require('./2-read_file');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    const buffer = [];
    const mainLog = console.log;

    console.log = (message) => {
      buffer.push(message);
    };

    buffer.push('This is the list of our students');

    try {
      countStudents(process.argv[2]);

      console.log = mainLog;

      res.write(buffer.join('\n'));
    } catch (err) {
      buffer.push('Cannot load the database');
      res.write(buffer.join('\n'));
    }
  }

  res.end();
});

app.listen(1245);

module.exports = app;
