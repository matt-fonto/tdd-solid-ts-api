import TaxItem from "./TaxItem";

// Amplifier is a TaxItem because it has a tax
export class Amplifier extends TaxItem {
  constructor(category: string, name: string, price: number, quantity: number) {
    super(category, name, price, quantity);
  }

  getTax(): number {
    return 20;
  }
}
