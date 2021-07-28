import { Seq, Map } from 'immutable';

const printBestStudents = (studentsObj) => {
  const filteredStudents = Seq(studentsObj)
    .filter((student) => student.score >= 70)
    .map(student => {
      student.firstName = student.firstName[0].toUpperCase() + student.firstName.slice(1)
      student.lastName = student.lastName[0].toUpperCase() + student.lastName.slice(1)
      return student;
    }).toObject();

  console.log(filteredStudents);
};

export default printBestStudents;

// const grades = {
//   1: {
//     score: 99,
//     firstName: 'guillaume',
//     lastName: 'salva',
//   }
// };

// printBestStudents(grades)
