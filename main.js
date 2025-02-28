console.log("a")
console.log("b")
console.log("c")
console.log("d")

function addSum() {
    let sum = 0;
    for(let i =1; i<=40; i++){
        sum += i;
        console.log("adding",  i,  "current sum", sum)
    }
    console.log("Final sum is", sum)
}

setTimeout(() => {
    addSum();
}, 1000)



console.log("e")
console.log("f")





