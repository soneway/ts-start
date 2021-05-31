interface IPerson {
  id: string,
  age?: number,
}

interface IWorker {
  deptId: string,
}

type IStaff = IPerson & IWorker

const staff: IStaff = {
  id: '1',
  // age: 22,
  deptId: 'EA',
};

interface ISize1 {
  size: number;
}

interface ISize2 {
  size: string;
}

type ISize = ISize1 & ISize2;

const size: ISize = {
  // size: number & string, 相当于size: never, 所以报错
  size: 1111,
};

type AllType = 'a' | 'b' | 'c' | 'd';
function handleAllType(type: AllType) {
  switch (type) {
    case 'a': {
      break;
    }
    case 'b': {
      break;
    }
    case 'c': {
      break;
    }
    default: {
      // 检测已穷举AllType, 因为没有覆盖到d, 所以报错
      const check: never = type;
      break;
    }
  }
}
