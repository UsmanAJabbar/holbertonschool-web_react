export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.TeacherInterface = {
  firstName: 'Guillame',
  lastName: 'Salva',
  experienceTeachingC: 10
}

cpp.setTeacher(cTeacher);
console.log('C++\n',
            cpp.getRequirements(),
            cpp.getAvailableTeacher());

java.setTeacher(cTeacher);
console.log('Java\n',
            java.getRequirements(),
            java.getAvailableTeacher());

react.setTeacher(cTeacher);
console.log('React\n',
            react.getRequirements(),
            react.getAvailableTeacher());
