// 类型保护与区分
interface Bird {
  fly ();

  layEggs ();
}

interface Fish {
  swim ();

  layEggs ();
}

function getPet (): Bird | Fish {
  return;
}

let pet = getPet();
pet.layEggs();
// pet.fly();

if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
}
else {
  (<Bird>pet).fly();
}

// parameterName is Type
function isFish (pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

if (isFish(pet)) {
  pet.swim();
}
else {
  pet.fly();
}

