export abstract class Item {
  category: string;
  name: string;
  price: number;
  quantity: number;

  constructor(category: string, name: string, price: number, quantity: number) {
    this.category = category;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
