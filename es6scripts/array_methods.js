"use strict"

let cart =[
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2}, 
    {item: "Baking Potato", price: 1.89, quantity: 6}, 
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1}, 
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1}, 
    {item: "Apples", price: 0.66, quantity: 6}
];

//build a new array fo just the item names using map
let itemNames = cart.map( (cartItem) => {

        return cartItem.item;

} );

itemNames.sort();

//loop over itemNames with forEach to display each name
itemNames.forEach( (item) => 
    console.log(item)
)


let cartTotal = cart.reduce( (total, item) => {
    return total += item.price * item.quantity
}, 0 )

console.log(`the cart total is: ${cartTotal}`)




    