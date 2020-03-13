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
