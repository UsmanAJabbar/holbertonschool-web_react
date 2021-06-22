interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}
interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

export class Director implements DirectorInterface {
  workFromHome():string { return 'Working from home' }
  getCoffeeBreak():string { return 'Getting a coffee break' }
  workDirectorTasks():string { return 'Getting to director tasks' }
}
export class Teacher implements TeacherInterface {
  workFromHome():string { return 'Cannot work from home' }
  getCoffeeBreak():string { return 'Cannot have a break' }
  workTeacherTasks():string { return 'Getting to work' }
}

export const createEmployee = (salary: number | string): Teacher | Director => {
  if ((typeof salary == 'string' && ( parseInt(salary) < 500 || parseInt(salary.slice(1)) < 500)) ||
       typeof salary == 'number' && salary < 500) return new Teacher();
  else return new Director();
}
const isDirector = (employee: Director | Teacher): employee is Director => !!(employee as Director).workDirectorTasks;
const executeWork = (employee: DirectorInterface | TeacherInterface): string => {
  if (isDirector(employee)) return employee.workDirectorTasks();
  return employee.workTeacherTasks()
}
type Subjects = 'Math' | 'History';
const teachClass = (todayClass:Subjects):string => `Teaching ${todayClass}`;

// executeWork(employee: DirectorInterface | TeacherInterface)
// function isDirector
