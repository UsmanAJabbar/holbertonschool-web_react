interface DirectorInterface {
  workFromHome(): string,
  getToWork(): string,
  workDirectorTasks(): string,
}
interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string,
}

class Director implements DirectorInterface {
  workFromHome() { return 'Working from home' }
  getToWork() { return 'Getting a coffee break' }
  workDirectorTasks() { return 'Getting to director tasks' }
}
class Teacher implements TeacherInterface {
  workFromHome() { return 'Cannot work from home' }
  getCoffeeBreak() { return 'Cannot have a break' }
  workTeacherTasks() { return 'Getting to work' }
}

const createEmployee = (salary: number | string): Teacher | Director => {
  if ((typeof salary == 'string' && ( parseInt(salary) < 500 || parseInt(salary.slice(1)) < 500)) ||
       typeof salary == 'number' && salary < 500) return new Teacher();
  else return new Director();
}
const isDirector = (employee: Teacher | Director): employee is Director => employee instanceof Director;
const executeWork = (employee: Teacher | Director): string => {
  if (isDirector(employee)) return employee.workDirectorTasks();
  return employee.workTeacherTasks()
}
