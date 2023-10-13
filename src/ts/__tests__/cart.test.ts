import Cart from "../Cart";

test('shuold add items to cart', () => {
  const cart = new Cart();

  const item1 = { id: 1, name: 'Item 1', price: 100 };
  const item2 = { id: 2, name: 'Item 2', price: 50 };

  cart.add(item1);
  cart.add(item2);

  expect(cart.items).toEqual([item1, item2]);
})

test('should calculate total cost without discount', () => {
  const cart = new Cart();
  const item1 = { id: 1, name: 'Item 1', price: 100 };
  const item2 = { id: 2, name: 'Item 2', price: 50 };

  cart.add(item1);
  cart.add(item2);

  const totalCost = cart.calculateTotalCost();

  expect(totalCost).toBe(150);
});

test('should calculate total cost with discount', () => {
  const cart = new Cart();
  const item1 = { id: 1, name: 'Item 1', price: 100 };
  const item2 = { id: 2, name: 'Item 2', price: 50 };

  cart.add(item1);
  cart.add(item2);

  const totalCost = cart.caclulateTotalWithDiscount(10); 

  expect(totalCost).toBe(135); 
});

test('should remove an item by id', () => {
  const cart = new Cart();
  const item1 = { id: 1, name: 'Item 1', price: 100 };
  const item2 = { id: 2, name: 'Item 2', price: 50 };

  cart.add(item1);
  cart.add(item2);

  cart.remove(1);

  expect(cart.items).toEqual([item2]);
});