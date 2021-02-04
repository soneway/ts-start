interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: Date;
}

type unknownEmployee = Admin | Employee


function printInfo (obj: unknownEmployee) {
  console.log(`name: ${obj.name}`);

  if ('privileges' in obj) {
    console.log(`privileges: ${obj.privileges}`);
  }

  if ('startDate' in obj) {
    console.log(`startDate: ${obj.startDate}`);
  }
}

let obj: unknownEmployee = { name: '111', privileges: ['111'] };
printInfo(obj);
