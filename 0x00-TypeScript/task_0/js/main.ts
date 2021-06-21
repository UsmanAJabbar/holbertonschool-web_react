// Interface
interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

// Create students from interface
const firstStudent: Student = {
  firstName: 'Usman',
  lastName: 'Jabbar',
  location: 'USA',
  age: 0,
}
const secondStudent: Student = {
  firstName: 'Usman',
  lastName: 'Jabbar',
  location: 'USA',
  age: 0,
}
const students: Array<Student> = [firstStudent, secondStudent];

// Generate table
const table: HTMLElement = document.createElement('table');
// Generate table header || Add tr > th * len(firstStudentKeys)
const header: HTMLElement = document.createElement('tr');
for (const field of Object.keys(firstStudent)) {
  let column: HTMLTableHeaderCellElement = document.createElement('th');
  column.innerHTML = field;
  header.appendChild(column);
}
table.appendChild(header);
// Add data to the tables || Add tr > td * len(firstStudentValues)
for (const student of students) {
  let studentRow: HTMLElement = document.createElement('tr');
  for (const value of Object.values(student)) {
    let tableData: HTMLTableDataCellElement = document.createElement('td');
    tableData.innerHTML = value;
    studentRow.appendChild(tableData);
  }
  table.appendChild(studentRow);
}
document.body.appendChild(table); // Attach table to the body tag