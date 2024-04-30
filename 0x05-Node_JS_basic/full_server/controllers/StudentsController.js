const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const meg = data.message;

        return response.status(200).send(meg.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    readDatabase(process.argv[2])
      .then((data) => {
        const info = data[major];

        const meg = `Number of students in ${major}: ${info.total}. List: ${info.students.join(', ')}`;

        return response.status(200).send(meg);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
    return null;
  }
}

module.exports = StudentsController;
