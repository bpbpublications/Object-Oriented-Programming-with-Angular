  // employee.ts
  export class Employee {
    
    private _name : string;
    public get name() : string {
      return this._name;
    }
    public set name(name: string) {
      this._name = name;
    }
  }
  