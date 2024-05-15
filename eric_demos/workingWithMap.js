"use strict"

let kids = [
    { first : "Natalie", last : "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly"}
  ];


  //get a new list of just the first names
  let arrayOfFirstNames = kids.map((kid) => {
        return kid.first;
  })

  console.log(arrayOfFirstNames)


  //get a new list of the first and last names combined
  let newArrayOfKidsFullNames = kids.map((kid) => {

    return `${kid.first} ${kid.last}`;

  })

  console.log(newArrayOfKidsFullNames)

  //get a new list of an object with a new key (property) of fullName added
  //Full name combines the first and last properties to get it's value
  let newArrayOfKidsWithFullNames = kids.map((kid) => {

    return {...kid, fullName: `${kid.first} ${kid.last}`}

  })

  console.log(newArrayOfKidsWithFullNames);