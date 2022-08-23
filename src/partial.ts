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

type _Omit<T, U> = _Pick<T, _Exclude<keyof T, U>>
type OmitUser = _Omit<IUser, 'male'>

type T = 'a' | 'c' | 'e';
type U = 'b' | 'c' | 'd';

type Test = Extract<T, U>

// ?后的T表示: a|c|e
type X1 = T extends U ? T : never; // 'a' | 'c' | 'e'
// ?后的T表示: a或c或e
// type Filter<T, U> = T extends U ? T : never;
// type X = Filter<T, U>; // 'c'

type _Extract<T, U> = T extends U ? T : never;
type X2 = _Extract<T, U>
type ExtractUserKeys = _Extract<keyof IUser, 'male' | 'test'>

type ExtraUserMale = Extract<keyof IUser, 'male' | 'test'>
// 只能Pick IUser存在的key
type PickUserMale = Pick<IUser, 'male'>


type Y1 = T extends U ? never : T; // 'a' | 'c' | 'e'
// type Diff<T, U> = T extends U ? never : T;
// type Y = Diff<T, U>; // 'a' | 'e'

type _Exclude<T, U> = T extends U ? never : T;
type Y2 = _Exclude<T, U>
type ExcludeUserKeys = _Exclude<keyof IUser, 'male' | 'age'>;

type AnyKeys = keyof any


