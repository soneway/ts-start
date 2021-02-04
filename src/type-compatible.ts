interface Named {
  name: string;
}

class Person {
  name: string;
}

let p: Named;

p = new Person();


let x: Named;
let y = { name: 'sjj', age: 32 };

x = y;
