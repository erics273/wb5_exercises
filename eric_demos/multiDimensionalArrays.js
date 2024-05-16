"use strict"

//a multidimensionalArray is an array with arrays in it
let lockerAndAccessCode = [
    ["Locker 1", 135],
    ["Locker 2", 159],
    ["Locker 3", 642]
];

console.log( lockerAndAccessCode[0][1] )

console.log( lockerAndAccessCode[2][1] )

console.log( lockerAndAccessCode[1][1] )

let teamMembers = [
    ["Dana", "Brenda", "Happy"],
    ["Laura", "Patti"],
    ["Leslye", "Randy", "Mollye", "Ranse"], 
    ["Eloise", "Robert"]
    ];

//loop over all the teams    
teamMembers.forEach( (team, i) => {
    console.log("-----------");
    console.log(`Team ${i + 1}`)
    console.log("-----------");

    team.forEach( (member) => {
        console.log(member)
    } )

} )