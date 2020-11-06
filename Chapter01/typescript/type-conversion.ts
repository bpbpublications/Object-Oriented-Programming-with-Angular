export interface IMovable {
  speed: number;
  break(): void;
}

export class Car {
  speed: number;
  break() {
    console.log('car break applied on speed: ', this.speed);
  }
}

export class Truck {
  speed: number;
  break() {
    console.log('truck break applied on speed: ', this.speed);
  }
}

export class Bike {
  wheels: number;
}

let suv: IMovable = new Car();
suv.speed = 150;
suv.break();

let monster: Truck = new Car();
monster.speed = 200;
monster.break();

// tsc type-conversion.ts && node type-conversion
// Output
// car break applied on speed:  150
// car break applied on speed:  200

console.log(suv instanceof Truck); // Output - false
console.log(suv instanceof Car); // Output - true

  let fakeSUV = <Truck>suv;
  let anotherFakeSUV = suv as Truck;

  console.log(fakeSUV);
  console.log(anotherFakeSUV);

  // Output
  // Car { speed: 150 }
  // Car { speed: 150 }