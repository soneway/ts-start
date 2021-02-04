interface LabelValue {
  label: string
}

function printLabel(labelData: LabelValue) {
  console.log(labelData.label);
}

printLabel({label: '1111'});


interface Config {
  color?: string,
  width?: number,
}

function createRect(configData: Config): { color: string, area: number } {
  let res = {color: 'white', area: 100};
  if (configData.color) {
    res.color = configData.color;
  }
  if (configData.width) {
    res.area = configData.width * configData.width;
  }
  return res;
}

createRect({color: 'red'});
// createRect({colors: 'red'});
// 类型断言
createRect({width: 100, opacity: 0.5} as Config);

interface Point {
  readonly x: number,
  readonly y: number,
}

let p1: Point = {x: 10, y: 20};

// p1.x = 1111;

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean,
}

let mySearch: SearchFunc = function () {
  let res;

  return res;
};


// 可索引的类型
interface StringArray {
  [index: number]: string,
}

let myArray: StringArray = {3: 'aaaa'};

// myArray = {a: 1};

interface NumberDict {
  [index: string]: number,

  length: number,
  // 与index返回值类型不匹配
  // name: string,
}

// 类类型
interface IClock {
  currentTime: Date,

  setTime(date: Date),
}

class Clock implements IClock {
  currentTime: Date;

  constructor(hour: number, minute: number) {
  }

  setTime(date: Date) {
    this.currentTime = date;
  }
}

interface IClockNew {
  new(hour: number, minute: number);
}
