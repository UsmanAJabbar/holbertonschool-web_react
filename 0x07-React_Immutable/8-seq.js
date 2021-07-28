import { Seq, Map } from 'immutable';

const printBestStudents = (studentsObj) => {
  const filteredStudents = Seq(Map(studentsObj))
    .filter((student) => student.score >= 70)
    .toJS();

  for (const student of Object.values(filteredStudents)) {
    student.firstName = student.firstName[0].toUpperCase() + student.lastName.slice(1)
    student.lastName = student.lastName[0].toUpperCase() + student.lastName.slice(1)
  }

  console.log(filteredStudents);
};

export default printBestStudents;

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};

printBestStudents(grades)
