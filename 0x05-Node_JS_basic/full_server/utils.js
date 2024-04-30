const fs = require('fs');

async function readDatabase(path) {
  let lines = '';

  try {
    const data = await fs.promises.readFile(path, 'utf8');

    lines = (data.split('\n')).slice(1);
  } catch (err) {
    throw new Error(err);
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

  const message = [];
  message.push('This is the list of our students');

  for (const key in values) {
    if (values[key].students) {
      const list = values[key].students.join(', ');
      message.push(`Number of students in ${key}: ${values[key].total}. List: ${list}`);
    }
  }
  values.message = message;
  return values;
}

module.exports = readDatabase;
