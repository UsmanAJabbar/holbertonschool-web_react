namespace Subjects {
  export interface TeacherInterface {
    experienceTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirements() {
      return 'Here is the list of requirements for Cpp';
    }
    getAvailableTeacher() {
      if (this.teacher.experienceTeachingC) return `Available Teacher: ${this.teacher.firstName}`;
      else return 'No available teacher';
    }
  }
}
