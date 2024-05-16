"use strict"

let cart = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Giant Chewy Nerds", price: 6.00 },
    { product: "Snickers Bar", price: 1.89 },
    { product: "Mounds Bar", price: 1.50 },
    { product: "Sour Patch Kids", price: 3.79 },
    { product: "Everlasting Gobstopper", price: .99 },
    { product: "Ring Pop", price: 1.79 }
];

//slick one liner
let under4 = cart.filter(product => product.price < 4);
console.log(under4);

let eminem = cart.filter( (product) => {

    if(product.product.indexOf("M&M") !== -1 ){
        return true;
    }

    return false;

} );

console.log(eminem);


let carryFish = cart.find( (fish) => {

    return fish.product === "Swedish Fish";

} )

console.log(carryFish);

if(carryFish){
    console.log("We carry those things")
}else{
    console.log("go to another store for that crap");
}

//same thing above as a ternary
(carryFish) ? console.log("We carry those things") : console.log("go to another store for that crap");


