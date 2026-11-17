export function orderPizza(topping, callback) {
  processOrder(topping, (orderErr) => {
    if (orderErr) return callback(orderErr);

    bakePizza(topping, (bakeErr, pizza) => {
      if (bakeErr) return callback(bakeErr);
      
      callback(null, pizza);
    });
  });
}

function processOrder(topping, callback) {
  setTimeout(() => {
    console.log(`Kitchen received an order for a ${topping} pizza ...`);

    if (topping === "pineapple") {
      return callback(
        new Error("Order failed: Sorry, we do not put pineapple on pizza")
      );
    }

    console.log("Assigning order to next available chef ...");

    setTimeout(() => {
      callback(null);
    }, 2000);
  }, 2000);
}

function bakePizza(topping, callback) {
  console.log(`Baking a ${topping} pizza ...`);

  setTimeout(() => {
    if (Math.random() < 0.5) {
      console.log("Pizza was burnt. Making another one");
      // Pass the original `callback` down into the recursive call!
      return bakePizza(topping, callback);
    }

    callback(null, `${topping} pizza`);
  }, 2000);
}
