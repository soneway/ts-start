interface IPerson2 {
  name: string,
  age: number,
}

const sem: IPerson2 = { name: 'sjj', age: 23 };
type Sem = typeof sem

const sem2: Sem = { name: 'song', age: 32 };


// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any


interface ILength {
  length: number,
}

// 定义约束
function logLength<T extends ILength> (arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength('');


interface Todo {
  title: string,
  desc: string,
}

function updateTodo (todo: Todo, fields: Partial<Todo>) {
  return { ...todo, ...fields };
}

const todo1: Todo = {
  title: 'title',
  desc: 'desc',
};
const todo2 = updateTodo(todo1, {
  desc: 'desc test',
});
