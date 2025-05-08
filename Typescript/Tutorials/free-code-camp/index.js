const menu = [
    {name: "pepperoni", price: 10},
    {name: "margarita", price: 8},
    {name: "hawaiian", price: 10},
    {name: "veggie", price: 9},
]

const cashRegister = 100;
const orderQueue = [];

function addNewPizza(name, price){
    menu.push({name, price})
}
addNewPizza("Meatlovers", 7)
console.log(menu);

function palceOrder(pizzaname){
selectedPizza = menu.find((pizza)=> pizza.name === pizzaname)

}