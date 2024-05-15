"use strict"

let kids = [
    { first : "Natalie", last : "Plyers" },
    { first: "Brittany", last: "Ray" },
    { first: "Zachary", last: "Westly" }
  ];


  let newArrayOfKidsFullNames = kids.map((kid) => {

    return `${kid.first} ${kid.last}`;

  })

  console.log(newArrayOfKidsFullNames)

  let newArrayOfKidsWithFullNames = kids.map((kid) => {

    return {...kid, fullName: `${kid.first} ${kid.last}`}

  })

  console.log(newArrayOfKidsWithFullNames);