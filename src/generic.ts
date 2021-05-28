function id<T>(arg: T): T {
  return arg;
}

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let genericNumber = new GenericNumber<number>();
// genericNumber.zeroValue = '11111';
genericNumber.zeroValue = 1111;

let genericString = new GenericNumber<string>();
// genericString.zeroValue = 11111;
genericString.zeroValue = '11111';

// 泛型约束
interface LengthWise {
  length: number;
}

function loggingIdentity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

type Dog<T = string> = { name: string, type: T }
const dog: Dog = { name: 'sjj', type: 111 };
const dog1: Dog = { name: 'sjj', type: '111' };
const dog2: Dog<number> = { name: 'sjj', type: 2222 };

function fill<T>(length: number, value: T): T[] {
  return new Array(length).fill(value);
}
const filled = fill(2, '11');

function sum<T extends number>(value: T[]): number {
  let count = 0;
  value.forEach(item => count += item);
  return count;
}
const sumed = sum([1, 2, 3, 5]);
const sumed1 = sum(['1', '3']);
