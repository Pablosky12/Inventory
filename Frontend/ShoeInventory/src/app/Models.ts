export class Shoe {
  constructor(
    public codename: string,
    public id: number,
    public brand: Brand,
    public price: number,
    public imageSrc: string,
  ) {
  }
}

export class Brand {
  constructor(
    public id: number = 0,
    public name: string
  ) {}
}

export class Transaction {
  constructor(
    public price: number,
    public id: number,
    public ammount: number,
    public productId: number,
    public productNameId: string
    public type: string,
  ) {}
}

