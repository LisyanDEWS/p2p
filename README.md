# p2p

A peer-to-peer boba tea ordering app.

## Boba

`boba.js` provides a simple boba tea ordering module.

### Usage

```js
const { getMenu, getToppings, createOrder, formatOrder } = require('./boba');

// Browse the menu
console.log(getMenu());
console.log(getToppings());

// Place an order: Taro Milk Tea with Tapioca Pearls, 50% sugar, 75% ice
const order = createOrder(2, [1], 50, 75);
console.log(formatOrder(order));
// Order Summary:
//   Drink: Taro Milk Tea ($5.00)
//   Toppings: Tapioca Pearls
//   Sugar Level: 50%
//   Ice Level: 75%
//   Total: $5.50
```

### API

| Function | Description |
|---|---|
| `getMenu()` | Returns the list of available drinks |
| `getToppings()` | Returns the list of available toppings |
| `createOrder(drinkId, toppingIds, sugarLevel, iceLevel)` | Creates an order object |
| `formatOrder(order)` | Returns a human-readable order summary string |
