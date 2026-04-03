// Интерфейс сотрудника
export interface IEmployeeData {
  id: string
  name: string
  surname: string
  age: string
  jobposition: string
}

export interface EmployeesState {
  employees: IEmployeeData[]
}

export enum CONTACT_EMPLOYEES_FORM {
  NAME = "name",
  SURNAME = "surname",
  AGE = "age",
  JOB_POSITION = "jobposition",
}
