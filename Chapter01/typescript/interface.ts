export interface Printer {
  copy(): void;
  serial_number: string;
  price?: number; //Optional field
}

export interface Scan {
  copy(): void;
}

export class HP implements Printer, Scan {
  serial_number: string;
  price?: number;
  copy(): void {
    console.log('copy called...');
  }
}

var hp = new HP();
hp.copy();