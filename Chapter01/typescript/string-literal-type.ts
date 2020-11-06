
  export class Rose {
    color: 'red' | 'yellow' | 'white';
    quantity: 10 | 20 | 30;
  }
  const rose = new Rose();
  rose.color = 'red';
  rose.color = 'black'; // Error - Type '"black"' is not assignable to type '"red" | "yellow" | "white"'

  rose.quantity = 20;
  rose.quantity = 50; // Error - Type '50' is not assignable to type '10 | 20 | 30'.
