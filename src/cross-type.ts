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
