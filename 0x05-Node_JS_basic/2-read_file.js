const fs = require('fs');

module.exports = function countStudents(path) {
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
};
