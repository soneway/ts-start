class Person {
  // #name: string = '';
  private name: string = '';
  private age: number = 0;

  constructor (name: string, age: number) {
    // this.#name = name;
    this.name = name;
    this.age = age;
  }
}

let person = new Person('sjj', 21);
person.age = 111;
