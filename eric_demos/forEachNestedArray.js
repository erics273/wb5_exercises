let someArray = [

    {name: "eric", kids: ["sam", "pam", "cam"]},
    {name: "Chanda", kids: ["jim", "kim", "tim"]},

]

someArray.forEach((someValue) => {

    console.log(`${someValue.name} has these kids:`)

    someValue.kids.forEach((value) => {
        console.log(value);
    })

    console.log("--------------------")

})