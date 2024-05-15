"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


//lets try to find something in the courses list (array)
//we want to find the courseId of PROG200
let prog200Course = courses.find( (course) => {

    //if we found the match return true
    if(course.CourseId === "PROG200"){
        return true;
    }

    //otherwise we didnt find the match, return false
    return false;

});

console.log(prog200Course)

console.log(`
    The course start date for ${prog200Course.Title} (${prog200Course.CourseId}) 
    is ${prog200Course.StartDate}`);


let proj500course = courses.find( (course) => {
     //if we found the match return true
     if(course.CourseId !== "PROJ500"){
        return false;
     }

    //otherwise we didnt find the match, return false
    return true;
} )

console.log(`The course title for courseId (${proj500course.CourseId}) is ${proj500course.Title}`);


let coursesUnder50 = courses.filter((course) => {

    if(course.Fee <= 50 ){
        return true;
    }

    return false;

})

//forEach Example
// coursesUnder50.forEach((course) => {
//     console.log(`${course.Title} is 50 or less`)
// });

//for loop example
for(let i=0; i < coursesUnder50.length; i++){
    console.log(`${courses[i].Title} is 50 or less`)
}

let classroom1Courses = courses.filter((course) => {

    if(course.Location === "Classroom 1"){
        return true;
    }

    return false;

})


//done with a regular function instead of an arrow function (=>) like we did above
classroom1Courses.forEach(function (course) {
    console.log(`${course.Title} is in Classroom 1`);
})



    