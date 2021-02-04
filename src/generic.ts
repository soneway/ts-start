function id<T> (arg: T): T {
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

function loggingIdentity<T extends LengthWise> (arg: T): T {
  console.log(arg.length);
  return arg;
}
