class Employee {
  private _fullName: string = '';

  get fullName (): string {
    return this._fullName;
  }

  set fullName (name: string) {
    if (name && name === 'hi') {
      this._fullName = name;
    }
    else {
      console.log('error');
    }
  }
}

let employee = new Employee();
employee.fullName = 'hi';
console.log(employee.fullName);
