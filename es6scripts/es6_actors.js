"use strict"

let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142,
        name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    },
];


let atLeast3 = academyMembers.filter((member) => {

    // if(member.films.length >= 3){
    //     return true;
    // }

    // return false;

    return member.films.length >= 3

})

console.log(atLeast3);

let theBobs = academyMembers.filter( (member) => {
    if(member.name.indexOf("Bob") === 0){
        return true;
    }

    return false;
})

console.log(theBobs)

let theAfilms = academyMembers.filter( (member) => {

    for(let i = 0; i< member.films.length; i++){

        if(member.films[i].indexOf("A") === 0){
            return true
        }

        return false;

    }
} )

console.log(theAfilms);