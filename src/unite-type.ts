function sayHi (name: string | undefined) {
  console.log(`${name}, hi`);
}

sayHi(undefined);

enum Mode {
  Auto = 200,
  Manual = 300,
}

interface Motor {
  type: 'motor',
  make: number,
}

interface Car {
  type: 'car',
  mode: Mode,
}

interface Truck {
  type: 'truck',
  capacity: number,
}

type Vehicle = Motor | Car | Truck

const FACTOR = Math.PI;

function evalPrice (vehicle: Vehicle) {
  // return vehicle.capacity * FACTOR;
  switch (vehicle.type) {
    case 'car': {
      return vehicle.mode * FACTOR;
    }
    case 'motor': {
      return vehicle.make * FACTOR;
    }
    case 'truck': {
      return vehicle.capacity * FACTOR;
    }
  }
}
