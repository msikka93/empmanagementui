// https://flow.org/en/docs/types/modules/

export type EmployeeType = {
  +id: string,
  +employee_name: string,
  +employee_salary: string,
  +employee_age: string,
  +profile_image: string
}

export type EmployeeListType = Array<EmployeeType>

export type EmployeesStateType = {
  +employees: EmployeeListType,
  +employeesLastEditedAt: number | null,
  +isLoading: boolean,
  +hasError: boolean
}

export type EmployeesState = {
  +employees: EmployeesStateType
}
