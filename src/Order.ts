import { Item } from "./Item";
import TaxItem from "./TaxItem";

export class Order {
  items: Item[];

  constructor() {
    this.items = [];
  }

  // item: name, price, quantity
  addItem(item: Item): void {
    this.items.push(item);
  }

  getTaxes(): number {
    let taxes = 0;

    // get each item from the items array and sum the taxes
    for (const item of this.items) {
      // check if the item is a TaxItem, meaning it has a tax
      if (item instanceof TaxItem) {
        // calculate the tax and add it to the total
        taxes += item.calculateTax();
      }
    }

    return taxes;
  }

  getTotal(): number {
    let total = 0;

    // get each item from the items array and sum the price
    for (const item of this.items) {
      total += item.price * item.quantity;
    }

    return total;
  }

  printOrder(): string {
    const message = `Your order has been created. Total: ${this.getTotal()} and taxes: ${this.getTaxes()}. Thank you!`;

    return message;
  }
}
