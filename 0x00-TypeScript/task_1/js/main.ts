interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
};

interface Directors extends Teacher {
  numberOfReports: number,
}

/* Interface defines a singature param so functions that associated with the interface would be accepted */
interface printTeacherFunction { (firstName: string, lastName: string): string }
export const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => `${firstName[0]}. ${lastName}`;

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}
interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClass,
}
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}
