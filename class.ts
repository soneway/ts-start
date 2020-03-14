class Greeter {
  greeting: string;

  constructor (message: string) {
    this.greeting = message;
  }

  greet () {
    return `hi, ${this.greeting}`;
  }
}

let greeter = new Greeter('sjj');


// 继承
class Animal {
  move (n: number = 0) {
    console.log(`move ${n}`);
  }
}

class Dog extends Animal {
  bark () {
    console.log('wang wang');
  }
}

const dog = new Dog();
dog.bark();
dog.move(1111);

class PAnimal {
  name: string;

  constructor (name: string) {
    this.name = name;
  }

  move (n: number = 0) {
    console.log(`move ${n}`);
  }
}

class Snake extends PAnimal {
  constructor (name) {
    super(name);
  }

  move (n = 5) {
    console.log('Slithering...');
    super.move(n);
  }
}

class Horse extends PAnimal {
  constructor (name: string) {
    super(name);
  }

  move (distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);
  }
}

let sam = new Snake('Sammy the Python');
let tom: Animal = new Horse('Tommy the Palomino');

sam.move();
tom.move(34);


// 公有/私有 修饰符
class Person {
  private name: string;
  protected age: number;

  constructor (name, age?) {
    this.name = name;
    this.age = age;
  }
}

let person = new Person('sjj');
// console.log(person.name);

// protected
class Employee extends Person {
  private dept: string;

  constructor (name: string, age: number, dept: string) {
    super(name, age);
    this.dept = dept;
  }

  getInfo () {
    return `${this.age} ${this.dept}`;
  }
}

let sjj = new Employee('sjj', 32, 'hehe');
sjj.getInfo();
// sjj.age;


// readonly
class Oct {
  readonly name: string;
  legCount: number = 8;

  constructor (name: string, legCount?: number) {
    this.name = name;
    this.legCount = legCount;
  }
}

let dad = new Oct('sjj', 2);
// dad.name = 111;


// 存取器
class Man {
  private _fullName: string;

  get fullName (): string {
    return this._fullName;
  }

  set fullName (value) {
    if (value === '123456') {
      console.error('非法输入');
    }
    else {
      this._fullName = value;
    }
  }
}

const man = new Man();
man.fullName = '11111';
console.log(man.fullName);
man.fullName = '123456';

// 抽象类: 可以包含成员实现细节<->接口
abstract class Dept {
  constructor (public name: string) {}

  printName (): void {
    console.log(this.name);
  }

  abstract printMeeting (): void;
}

class AccountDept extends Dept {
  constructor (name: string) {
    super(name);
  }

  printMeeting (): void {
    console.log('printMeeting');
  }
}

const dept = new AccountDept('sjj');
dept.printMeeting();
dept.printName();

// 类可以当接口用
