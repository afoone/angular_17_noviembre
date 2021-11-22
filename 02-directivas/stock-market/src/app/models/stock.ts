export class Stock {
  public name: string; // Telefonica
  public code: string; // TEL
  public price: number;
  public previousPrice: number;
  public favorite: boolean

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
    this.favorite = false
  }


}

// constructor(
//   public name: string, // Telefonica
//   public code: string, // TEL
//   public price: number,
//   public previousPrice: number
// ) {

// }
