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

    countStudents(process.argv[2]);

    console.log = mainLog;

    res.write('This is the list of our students\n');

    res.write(buffer.join('\n'));
  }

  res.end();
});

app.listen(1245);

module.exports = app;
