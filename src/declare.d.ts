interface IJQuery {
  (sel: string): any;
  ajax(url: string, opitons?: any): void;
}

// 变量
declare const $: IJQuery;
declare const jQuery: IJQuery;

// 函数
declare function querySelctor(sel: string): any;

// 类
declare class Animal {
  name: string;
  constructor() {};
  sayHi(): string;
}

// 枚举
declare enum Direction {
  top, right, bottom, left
}

// 命名空间
declare namespace request {
  function ajax(url: string, opitons?: any): void;
}
