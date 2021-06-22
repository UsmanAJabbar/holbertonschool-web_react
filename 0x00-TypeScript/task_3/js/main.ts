/// <reference path='./crud.d.ts' />
import * as CRUD from './crud';
import { RowID,
         RowElement } from './interface';

const row: RowElement = {
  firstName: 'Guilaume',
  lastName: 'Salva',
}
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);