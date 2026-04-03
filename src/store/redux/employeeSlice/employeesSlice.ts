import { createAppSlice } from "store/createAppSlice"
import { EmployeesState, IEmployeeData } from "store/redux/employeeSlice/types"
import type { PayloadAction } from "@reduxjs/toolkit"

export const employeeInitialSlice: EmployeesState = {
  employees: [],
}

export const employeeSlice = createAppSlice({
  name: "EMPLOYEE",
  initialState: employeeInitialSlice,
  reducers: {
    addEmployee: (state, action: PayloadAction<IEmployeeData>) => {
      state.employees.push(action.payload)
    },

    deleteEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter(
        employee => employee.id !== action.payload,
      )
    },

    clearEmployees: state => {
      state.employees = []
    },
  },

  selectors: {
    employees: state => state.employees,
  },
})

export const employeeSliceActions = employeeSlice.actions
export const employeeSliceSelectors = employeeSlice.selectors
