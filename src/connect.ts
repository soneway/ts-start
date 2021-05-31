interface initInterface {
  count: number;
  message: string;
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}

interface Action<T> {
  payload?: T
  type: string
}

type Result = {
  asyncMethod<T, U>(input: T): Action<U>;
  syncMethod<T, U>(action: T): Action<U>;
}

type PickFnProps<T> = {
  [P in keyof T]: T[P] extends Function ? T[P] : never;
}[keyof T]

type FnProps = PickFnProps<initInterface>

type AllKeys = {
  a: 'a',
  b: never,
  c: 'c'
}

type Keys = AllKeys[keyof AllKeys]
