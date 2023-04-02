
// Number of Drinks code

const drinksDisplay = document.querySelector("#drinks");
let numDrinks = Number(window.localStorage.getItem("drinks"));

if (numDrinks !== 0) {
    drinksDisplay.textContent = numDrinks;
} else {
    drinksDisplay.textContent = `You haven't ordered any drinks.`;
}