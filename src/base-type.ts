let bool = true; // 被推断为boolean
bool = 111; // 不能赋值为非boolean

let array = [1, 2, 3, ''];
for (const item of array) {
  item.toFixed(2); // Error
}
// let array: (string | number)[] = [1, 2, 3, ''];
let array2: Array<number | string> = [1, 2, 3];

let anyVar: any;
anyVar = 111;
anyVar.trim();
anyVar();
new anyVar();
anyVar[0][1];

let unknownVar: unknown;
unknownVar = () => {};
unknownVar.trim();

let tuple: [number, boolean, string];
tuple = ['', true, 1];

function log (info: string): void {
  console.log(info);
}

function add (num: number): number {
  return num + 1;
}

let addRs: number = add(2);

let u: undefined = undefined;
let n: null = null;
let un: number = undefined;
let nn: number = null;

function error (msg: string): never {
  throw new Error(msg);
}


