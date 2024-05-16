//standard function definition
function sayHello(greeting){
    return greeting;
}

let greeting = sayHello("hello");

console.log(greeting);

//function expressions

let someOtherFunction = function(someParameter){
    console.log(someParameter);
}

someOtherFunction("eric");

//arrow functions with curly braces. Allows for more than one line of code in my function
//must have a return if I want it to return a value
let myArrowFunction = (someParameter) => {
     return someParameter;
}

console.log(myArrowFunction("Thing in the arrow"));

//one line arrow function, return is implied. No curly braces allowed.
let myArrowFunctionAgain = (someParameter) => someParameter;

console.log(myArrowFunctionAgain("Thing in the other arrow"));


//example usage of one line arrow function with reduce
let cart = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Giant Chewy Nerds", price: 6.00},
    {product: "Snickers Bar", price: 1.89},
    {product: "Mounds Bar", price: 1.50},
    {product: "Sour Patch Kids", price: 3.79},
    {product: "Everlasting Gobstopper", price: .99},
    {product: "Ring Pop", price: 1.79}
 ];

 let cartTotal = cart.reduce( (total, item) => total += item.price, 0 )

 console.log(cartTotal.toFixed(2))
