const { Seq, Map } = require('immutable');

const printBestStudents = (studentsObj) => {
  const filteredStudents = Seq(Map(studentsObj))
    .filter((student) => student.score >= 70)
    .toJS();

  Object.values(filteredStudents)
    .map((student) => console.log(
      student.firstName[0].toUpperCase() + student.firstName.slice(1),
      student.lastName[0].toUpperCase() + student.lastName.slice(1),
    ));
};

export default printBestStudents;
