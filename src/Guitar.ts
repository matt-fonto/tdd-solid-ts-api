import TaxItem from "./TaxItem";

// Guitar is a TaxItem because it has a tax
export class Guitar extends TaxItem {
  constructor(category: string, name: string, price: number, quantity: number) {
    super(category, name, price, quantity);
  }

  getTax(): number {
    return 10;
  }
}
