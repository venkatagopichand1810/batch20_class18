// function add(a, b) {
//  return a + b
// }
// function sub(a, b) {
//     return a - b
//    }

// console.log(add(4, 5))

// console.log(sub(4, 5))


// passing the params to the function call



// a callback is the funtion that is passed as an arugment to another function



function greet(name, callback){
    console.log("hello, " + name);
    callback(); //exeucting the callback funtion

}

// callback funtion
function welcomeVenkat() {
    console.log("welcome")
}

greet("venkat", welcomeVenkat);  //calling the funtion by passing another funtion


// forEach
let numbers = [1, 2, 3, 4, 5];

// using forEach
numbers.forEach(function(number) {
    console.log(number * 2)
})