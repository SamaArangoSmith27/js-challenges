import { wait } from "./utils.js";

export async function orderPizza(topping) {
    await processOrder(topping);
    return bakePizza(topping);
}

async function processOrder(topping) {
    await wait(2000);

    console.log(`Kitchen received an order for a ${topping} pizza ...`);

    if(topping === "pineapple") {
        throw new Error("Order failed: Sorry, we do not put pineapple on pizza");
    }

    console.log("Assigning order to next available chef ...");

    await wait(2000);
}

async function bakePizza(topping) {
    console.log(`Baking a ${topping} pizza ...`);

    await wait(2000);

    if(Math.random() < 0.5) {
        console.log("Pizza was burnt. Making another one");
        return bakePizza(topping);
    }

    return `${topping} pizza`;
}
