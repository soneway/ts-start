class GenericNumber<T> {
  // 可以跳过 strictPropertyInitialization 检查
  zero!: T;
  add: (x: T, y: T) => T;
}

let number = new GenericNumber<number>();
number.zero = 0;
number.add = (x, y) => {
  return x + y;
};

console.log(number.add(1, 2));
