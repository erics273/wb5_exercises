"use strict"

let person = {
    name: "Pursalane", 
    age: 11, 
    gender: "Female"
};


for(let potato in person) {

    console.log(`The key is ${potato} and the value is ${person[potato]}`);

}