interface IPeople {
  name: string,
  age: number,
}

interface IPeople2 {
  readonly name: string,
  age: number,
  sayHi: Function,
}

let sjj: IPeople2 = {
  name: 'sjj',
  age: 12,
  sayHi: () => {},
};
sjj.name = 1111;

let readonlyArray: ReadonlyArray<number> = [1, 2, 3, 4];
readonlyArray[0] = 2;
