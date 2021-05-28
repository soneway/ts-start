interface IUser {
  name: string;
  age?: number;
  male?: boolean;
}

type Keys = keyof IUser

type _Partial<T> = {
  [p in keyof T]?: T[p];
}
type PartialUser = _Partial<IUser>;

type _Required<T> = {
  [p in keyof T]-?: T[p];
}
type RequiredUser = _Required<IUser>;

type _Readonly<T> = {
  readonly [p in keyof T]: T[p];
}
type AgeType = IUser['age'];
type ReadonlyUser = _Readonly<IUser>;

type _Pick<T, K extends keyof T> = {
  [p in K]: T[p];
}
type PickUser = _Pick<IUser, 'name' | 'age'>;

type T = 'a' | 'c' | 'e';
type U = 'b' | 'c' | 'd';

type X1 = T extends U ? T : never; // 'a' | 'c' | 'e'
type Filter<T, U> = T extends U ? T : never;
type X = Filter<T, U>; // 'c'

type Y1 = T extends U ? never : T; // 'a' | 'c' | 'e'
type Diff<T, U> = T extends U ? never : T;
type Y = Diff<T, U>; // 'a' | 'e'

type AnyKeys = keyof any

type _Exclude<T, U> = T extends U ? never : T;
type ExcludeUserKeys = _Exclude<keyof IUser, 'male' | 'age'>;

type _Extract<T, U> = T extends U ? T : never;
type ExtractUserKeys = _Extract<keyof IUser, 'male' | 'test'>

type _Omit<T, U> = _Pick<T, _Exclude<keyof T, U>>
type OmitUser = _Omit<IUser, 'male'>


