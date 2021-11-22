export class Stock {
  public name: string; // Telefonica
  public code: string; // TEL
  public price: number;
  public previousPrice: number;

  constructor(
    name: string,
    code: string,
    price: number,
    previousPrice: number,
  ) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.previousPrice = previousPrice;
  }


  isSubiendo() {
    return this.price > this.previousPrice
  }

  isCambioFuerte() {
    return Math.abs(this.price - this.previousPrice) > 2;
  }

}

// constructor(
//   public name: string, // Telefonica
//   public code: string, // TEL
//   public price: number,
//   public previousPrice: number
// ) {

// }
