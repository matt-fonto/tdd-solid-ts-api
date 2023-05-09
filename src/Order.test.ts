import { Amplifier } from "./Amplifier";
import { Cable } from "./Cable";
import { Guitar } from "./Guitar";
import { Order } from "./Order";

describe("Order", () => {
  // here we can declare variables that will be used in all tests
  // we declare the order variable here because we need to use it in all tests
  let order: Order;

  // before each test, do the following
  beforeEach(() => {
    // create a new order
    order = new Order();

    // add items to the order
    order.addItem(new Guitar("Musical Instrument", "Guitar", 1000, 1)); //Tax: 10%
    order.addItem(new Amplifier("Musical Instrument", "Amplifier", 500, 1)); //Tax: 20%
    order.addItem(new Cable("Musical Instrument", "Cable", 30, 1)); //Tax: 0%
  });

  // test 1: get total
  it("should get the total", () => {
    // given an order with 3 items
    // when we get the total
    const total = order.getTotal();

    // then we should get the total
    expect(total).toBe(1530);
  });

  //test 2: calculate with tax
  it("should calculate with tax", () => {
    const taxes = order.getTaxes();
    expect(taxes).toBe(200);
  });

  // test 3: print order
  it("shoud create an order and print a message", () => {
    const message = order.printOrder();

    expect(message).toBe(
      `Your order has been created. Total: ${order.getTotal()} and taxes: ${order.getTaxes()}. Thank you!`
    );
  });
});
