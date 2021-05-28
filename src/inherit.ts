class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(dist: number = 0) {
    console.log(`${this.name} move ${dist}`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(dist: number = 5) {
    console.log('呵呵');
    // super.move(dist);
  }
}

let sam = new Snake('wocao');
sam.move();

export {};
