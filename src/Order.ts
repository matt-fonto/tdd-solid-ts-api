import { Item } from "./Item";

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
      //
      if (item.name === "Guitarra") {
        taxes += (item.price * 10) / 100;
      }
      if (item.name === "Amplificador") {
        taxes += (item.price * 20) / 100;
      }
    }

    return taxes;
  }

  getTotal(): number {
    let total = 0;

    // get each item from the items array and sum the price
    for (const item of this.items) {
      total += item.price;
    }

    return total;
  }
}
