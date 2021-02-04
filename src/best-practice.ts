let obj: object = {};

let list = [];
let data = {
  list: [],
};
list = [1, ''];
// data.list.push(1);

let any: any = 1;
any[1] = 2;
any.toFixed(2);

let unknown: unknown = 2;
// unknown.toFixed(2);
// (<number>unknown).toFixed(2);
(unknown as number).toFixed(2);

let unknown2: unknown = { 1: 2 };
// unknown2[1] = 2;
(unknown2 as any)[1] = 2;


interface IData {
  foo: number,
  bar: boolean,

  [key: string]: string | number,
}

let data2: IData = {
  foo: 1,
  bar: true,
  c: true,
};


type Data = Record<string, string | number>;

interface IOneField {
  (a: string): string,
}

let func: IOneField = (a: string) => {
  return '';
};


export {};

