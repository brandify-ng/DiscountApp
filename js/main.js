// function greet(firstname, lastname) {
//     let password = 'euaonnll312ej1++rjf;'
//     console.log(`Hello ${firstname} ${lastname}, your password is ${password}`);
// }

// greet('Adamu', 'Shehu');


let appButton = document.getElementById("btn");
let displayResult = document.getElementById("result");
appButton.addEventListener("click", calculatePrice);
// calculate discount and price
function calculatePrice(a) {
    a.preventDefault();
    let customerName = document.getElementById("customer").value;
    let itemName = document.getElementById("productname").value;
    let itemPrice = document.getElementById("productprice").value;
    let itemCount = document.getElementById("quantity").value;
    // discounts
    const tenDiscount = 0.1 * itemPrice;
    const twentyDiscount = 0.2 * itemPrice;
    const thirtyDiscount = 0.3 * itemPrice;
    const fortyDiscount = 0.4 * itemPrice;
    // alert("You clicked me!");
    if (itemCount > 0 && itemCount <= 3) {
        displayResult.innerHTML = `${customerName} bought ${itemCount} units of ${itemName} at 10% Discount for N${itemPrice - tenDiscount} each totaling N${itemCount * (itemPrice - tenDiscount)}`;
    } else if (itemCount > 3 && itemCount <= 6) {
        displayResult.innerHTML = `${customerName} bought ${itemCount} units of ${itemName} at 20% Discount for N${itemPrice - twentyDiscount} each totaling N${itemCount * (itemPrice - twentyDiscount)}`;
    } else if (itemCount > 6 && itemCount <= 8) {
        displayResult.innerHTML = `${customerName} bought ${itemCount} units of ${itemName} at 30% Discount for N${itemPrice - thirtyDiscount} each totaling N${itemCount * (itemPrice - thirtyDiscount)}`;
    } else if (itemCount > 8 && itemCount <= 10) {
        displayResult.innerHTML = `${customerName} bought ${itemCount} units of ${itemName} at 40% Discount for N${itemPrice - fortyDiscount} each totaling N${itemCount * (itemPrice - fortyDiscount)}`;
    } else {
        displayResult.innerHTML = `no sale`;
    };
}

