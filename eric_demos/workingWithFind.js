//this function is like a test for each value in the array
//the first item in the array that passes the test gets returned
//if nothings passes the test we get undefined
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
let over60 = numbersArray.find(isOver60);

console.log(over60);

//instead of returning the value it returns the index of the match in the array
let over60Index = numbersArray.findIndex(isOver60)
