//this function is like a test for each value in the array
//the first item in the array that passes the test gets returned
//if nothings passes the test we get an empty array
function isOver60(someValue) {
    if (someValue > 60) {
        return true;
    }
    else {
        return false;
    }
}

//just a list of numbers
let numbersArray = [1, 5, 30, 58, 60, 37,100, 200];

//funning the test and storing the found value in over60
let over60Array = numbersArray.filter(isOver60);

console.log(over60Array);

let products = [
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

 let filteredProducts = products.filter(function(product){
    if(product.price < 2){
        return true;
    }
    return false;
 })

 console.log(filteredProducts);