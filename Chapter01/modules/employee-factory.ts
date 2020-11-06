
  // employee-factory.ts
  import { Employee } from "./employee";

  export default function addEmployee(employeeName: string): Employee {
    const newEmployee = new Employee();
    newEmployee.name = employeeName;
    return newEmployee;
  }
