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

//find all the actors who have films that start with the letter A
//loop over all the actors in the academyMembers array using filter.
let theAfilms = academyMembers.filter( (member) => {

    //looping over all the films for each actor (member)
    // for(let i = 0; i< member.films.length; i++){

    //     //do any of the films start with A
    //     if(member.films[i].indexOf("A") === 0){
    //         return true
    //     }

    //     return false;

    // }

    //slick way of doing this with .some and .startsWith with
    return member.films.some((film) => {

        if(film.startsWith("A")){
            return true;
        };

        return false;
    });

} )

//display the members that have a film starting with A
console.log(theAfilms);