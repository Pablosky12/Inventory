export class Shoe {
  constructor(
    public codename: string,
    public id: number,
    public brand: Brand,
    public price: string,
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
}

