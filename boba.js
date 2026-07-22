const MENU = [
  { id: 1, name: "Classic Milk Tea", price: 4.5 },
  { id: 2, name: "Taro Milk Tea", price: 5.0 },
  { id: 3, name: "Matcha Milk Tea", price: 5.0 },
  { id: 4, name: "Brown Sugar Boba", price: 5.5 },
  { id: 5, name: "Strawberry Fruit Tea", price: 4.5 },
];

const TOPPINGS = [
  { id: 1, name: "Tapioca Pearls", price: 0.5 },
  { id: 2, name: "Grass Jelly", price: 0.5 },
  { id: 3, name: "Pudding", price: 0.75 },
  { id: 4, name: "Lychee Jelly", price: 0.75 },
];

function getMenu() {
  return [...MENU];
}

function getToppings() {
  return [...TOPPINGS];
}

/**
 * Creates a boba tea order.
 *
 * @param {number} drinkId - The id of the drink from the menu.
 * @param {number[]} [toppingIds=[]] - Array of topping ids to add.
 * @param {number} [sugarLevel=100] - Sugar level percentage (0–100).
 * @param {number} [iceLevel=100] - Ice level percentage (0–100).
 * @returns {{ drink: object, toppings: object[], sugarLevel: number, iceLevel: number, total: number }}
 * @throws {Error} If the drinkId or any toppingId is not found.
 */
function createOrder(drinkId, toppingIds = [], sugarLevel = 100, iceLevel = 100) {
  const drink = MENU.find((d) => d.id === drinkId);
  if (!drink) {
    throw new Error(`Drink with id ${drinkId} not found`);
  }

  const selectedToppings = toppingIds.map((tid) => {
    const topping = TOPPINGS.find((t) => t.id === tid);
    if (!topping) {
      throw new Error(`Topping with id ${tid} not found`);
    }
    return topping;
  });

  const total =
    drink.price + selectedToppings.reduce((sum, t) => sum + t.price, 0);

  return {
    drink,
    toppings: selectedToppings,
    sugarLevel,
    iceLevel,
    total: Math.round(total * 100) / 100,
  };
}

/**
 * Returns a human-readable summary of an order.
 *
 * @param {{ drink: object, toppings: object[], sugarLevel: number, iceLevel: number, total: number }} order
 * @returns {string} Formatted order summary.
 */
function formatOrder(order) {
  const toppingNames =
    order.toppings.length > 0
      ? order.toppings.map((t) => t.name).join(", ")
      : "None";
  return (
    `Order Summary:\n` +
    `  Drink: ${order.drink.name} ($${order.drink.price.toFixed(2)})\n` +
    `  Toppings: ${toppingNames}\n` +
    `  Sugar Level: ${order.sugarLevel}%\n` +
    `  Ice Level: ${order.iceLevel}%\n` +
    `  Total: $${order.total.toFixed(2)}`
  );
}

module.exports = { getMenu, getToppings, createOrder, formatOrder };
