
  // employee-list.ts
  import { Employee } from "./employee";
  import addEmployee from "./employee-factory";

  export class EmployeeList {

    private employeeList: Array<Employee>;

    constructor() {
      this.employeeList = new Array<Employee>();

      const newEmployee = addEmployee('Employee-1');
    }
  }