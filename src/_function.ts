// 函数类型
let funcType: (chars: string, nums: number) => string;
funcType = (name: string, id: number): string => {
  return name + id;
};

// 可选参数
const optArgs = (name: string, age?: number) => {
  return name + age;
};
optArgs('sjj');

// 默认参数
const defaultArgs = (name: string, age: number = 28) => {
  return name + age;
};
defaultArgs('sjj');

// 可选参数必须放在普通参数后面
// const funcArgs = (name?: string, age: number) => {
//   return name + age;
// };

// 函数重载
function add (a: number, b: number): number;
function add (a: string, b: string): string;
function add (a: string, b: number): string;
function add (a: number, b: string): string;
function add (a: number | string, b: number | string) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a + '' + b;
  }
  return a + b;
}

let res = add(1, 1);
let res2 = add('', 1);
