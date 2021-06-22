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
const isDirector = (employee: Teacher | Director): employee is Director => employee instanceof Director;
const executeWork = (employee: Teacher | Director): string => {
  if (isDirector(employee)) return employee.workDirectorTasks();
  return employee.workTeacherTasks()
}
const teachClass = (todayClass: 'Math' | 'History') => `Teaching ${todayClass}`;


// executeWork(employee: DirectorInterface | TeacherInterface)
// function isDirector