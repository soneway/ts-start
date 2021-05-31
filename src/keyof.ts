function getValue<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const inst = {
  age: 25,
  name: 'sjj',
};

const age = getValue(inst, 'age');
