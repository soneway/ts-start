let num: number = 2;
let str: string = '111';

let nums: number[] = [1, 2, 3];
let strs: string[] = ['1', '2'];

// 元组
let x: [string, number];
x = ['1', 2];
console.log(x[0].substr(1));
console.log(x[1].toFixed(2));
// x[2] = '';
// console.log(x[5].toString());

enum Color {
  Red,
  Green,
}

let colorName: string = Color[0];
console.log(colorName);

let anyType: any = 4;
// anyType = '111';

anyType.substr(1);
anyType.toFixed(2);

function log (): void {
  console.log(1111);
}

let u: number = undefined;
let n: string = null;
let o: object = undefined;

declare function create (o: object): void;

create({});
create(null);
create(undefined);

let anyStr: any = 'this is a string';
let len: number = (<string>anyStr).length;


// 类型推断
let hehe = 3;
// hehe = '1111';

let foo = [0, 1, ''];
foo[3] = '';
// foo[4] = {};

let bar: (string | number | object)[] = [1, '1', {}];

let date = new Date();
// date = 1;

let obj: object = {};
// obj = 1;

let reg = /\d/;
// reg = 1;

let func = () => {};
// func = 1;
