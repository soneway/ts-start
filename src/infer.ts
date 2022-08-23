type TArea = (width: number, height: number) => number;

class School {
  name: string;
  uid: string;

  constructor(name: string) {
    this.name = name;
  }
}

type _Parameters<T extends (...args: any) => any> = T extends (...args: infer A) => any ? A : never
type parameters = _Parameters<TArea>
type p1 = Parameters<TArea>

type _ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
type returnType = _ReturnType<TArea>
type r1 = ReturnType<TArea>

type _InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : never
type typeofSchool = typeof School;
type typeofFunction = typeof Function;
type it = _InstanceType<typeof School>
type nameType = it['name']
type i1 = InstanceType<typeof School>
type i2 = InstanceType<typeof Function>

type _ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer A) => any ? A : never
type constructorParameters = _ConstructorParameters<typeof School>

type _ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;
function toHex(this: number) {
  return this.toString(16);
}
type thisParameterType = _ThisParameterType<typeof toHex>
function numberToString(n: thisParameterType) {
  return toHex.apply(n);
}

type _OmitThisParameter<T> =
// 不包含this参数, 则直接返回
  unknown extends _ThisParameterType<T>
    ? T : T extends (...args: infer A) => infer R
    ? (...args: A) => R : T;
function add(this: number, b: string) {
  return this + +b;
}
type returnNumber = _OmitThisParameter<typeof add>
