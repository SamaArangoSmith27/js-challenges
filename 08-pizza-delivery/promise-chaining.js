import { wait } from "./utils.js"

export function orderPizza(topping) {
    return processOrder(topping)
        .then(() => bakePizza(topping));
}

function processOrder(topping) {
    return wait(2000).then(() => {
        console.log(`Kitchen received an order for a ${topping} pizza ...`);

        if(topping === "pineapple") {
            throw new Error("Order failed: Sorry, we do not put pineapple on pizza");
        }

        console.log("Assigning order to next available chef ...");
        
        return wait(2000);
    });
}

function bakePizza(topping) {
    console.log(`Baking a ${topping} pizza ...`);

    return wait(2000).then(() => {
        if(Math.random() < 0.5) {
            console.log("Pizza was burnt. Making another one");
            return bakePizza(topping);
        }
        return `${topping} pizza`;
    });
}
