function Greeter (target: Function): void {
  target.prototype.greet = (): void => {
    console.log('hello');
  };
}

@Greeter
class Greeting {
  constructor () {}
}

let myGreeting = new Greeting();
myGreeting.greet();
