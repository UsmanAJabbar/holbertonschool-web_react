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
  if (typeof salary == 'string' && parseInt(salary) == NaN) salary = salary.slice(1);
  if (salary < 500) return new Teacher();
  else return new Director();
}
