type TArea = (width: number, height: number) => number;

class School {
  name: string;
  uid: string;

  constructor(name: string) {
    this.name = name;
  }
}

type _Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
type parameters = _Parameters<TArea>

type _ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
type returnType = _ReturnType<TArea>

type _InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : never
type instanceType = typeof School;
type instanceType2 = InstanceType<typeof Function>
type typeofType = typeof Function;

type _ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer A) => any ? A : never
type constructorParameters = _ConstructorParameters<typeof School>

type _ThisParameterType<T> = T extends (this: infer U, ...args: any) => any ? U : unknown;
type thisParameterType = _ThisParameterType<typeof Function>
