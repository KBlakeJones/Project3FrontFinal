export class Address {
    constructor(
      public addressId: number,
      public streetAddress: string,
      public city: string,
      public state: string,
      public zipCode: string
    ) {}
  }