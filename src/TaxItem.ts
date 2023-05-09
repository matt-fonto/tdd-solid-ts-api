import { Item } from "./Item";

export default abstract class TaxItem extends Item {
  // SRP: we moved the tax calculation to the Item class instead of the Order class
  calculateTax(): number {
    // The problem with this implementation is that I need to add a new condition every time I add a new item
    // and this is not scalable. We're violating the Open/Closed Principle.
    return (this.price * this.quantity * this.getTax()) / 100;
  }

  // if we have an abstract method, we need to declare the class as abstract
  // this method is implemented in the child classes
  abstract getTax(): number;
}
