import { Item } from "./Item";

// Cable is an Item because it doesn't have any tax
export class Cable extends Item {
  constructor(category: string, name: string, price: number, quantity: number) {
    super(category, name, price, quantity);
  }
}
