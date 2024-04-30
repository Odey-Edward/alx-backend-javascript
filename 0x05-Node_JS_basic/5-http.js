const http = require('http');
const fs = require('fs');

function countStudents(path) {
  let lines = '';

  try {
    const data = fs.readFileSync(path, 'utf8');

    lines = (data.split('\n')).slice(1);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const values = {};

  values.len = 0;

  lines.forEach((line) => {
    if (line !== '') {
      values.len += 1;

      const subValues = line.split(',');
      const field = subValues.pop();

      if (field in values) {
        values[field].total += 1;
        values[field].students.push(subValues[0]);
      } else {
        values[field] = {};
        values[field].total = 1;
        values[field].students = [subValues[0]];
      }
    }
  });

  console.log(`Number of students: ${values.len}`);
  for (const key in values) {
    if (values[key].students) {
      const list = values[key].students.join(', ');
      console.log(`Number of students in ${key}: ${values[key].total}. List: ${list}`);
    }
  }
}

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
