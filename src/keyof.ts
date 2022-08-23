function getValue<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const inst = {
  age: 25,
  name: 'sjj',
};

type InstType = typeof inst

type InstKeys = keyof InstType

type Person1 = {
  name: string,
  age: number,
}

type PersonKeys = keyof Person1

const age = getValue(inst, 'age');

type Name = Person1['name']
