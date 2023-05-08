import { Item } from "./Item";
import { Order } from "./Order";

describe("Order", () => {
  // here we can declare variables that will be used in all tests
  let order: Order;

  // before each test, do the following
  beforeEach(() => {
    // create a new order
    order = new Order();

    // add items to the order
    order.addItem(new Item("Guitarra", 1000, 1)); //Tax: 10%
    order.addItem(new Item("Amplificador", 5000, 1)); //Tax: 20%
    order.addItem(new Item("Cabo", 30, 3)); //Tax: 0%
  });

  // test 1: get total
  it("should get the total", () => {
    // given an order with 3 items
    // when we get the total
    const total = order.getTotal();

    // then we should get the total
    expect(total).toBe(6030);
  });

  // test 2: calculate with tax
  it("should calculate with tax", () => {
    const taxes = order.getTaxes();
    expect(taxes).toBe(1100);
  });

  // test 3: delete item
  it("should delete an item", () => {
    // given: the order has 3 items
    expect(order.items.length).toBe(3);

    // when: we delete an item
    order.items.splice(1, 1);

    // then: the order should have 2 items
    expect(order.items.length).toBe(2);

    // and: the total should be updated
    expect(order.getTotal()).toBe(1030);
  });
});
