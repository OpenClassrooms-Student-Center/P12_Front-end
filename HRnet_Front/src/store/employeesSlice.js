import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee(state, action) {
      const newEmployee = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.employees.push(newEmployee);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export const selectEmployees = (state) => state.employees.employees;

export default employeeSlice.reducer;