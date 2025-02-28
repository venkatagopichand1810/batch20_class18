// function chooseFood(foodItem, callback){
//     setTimeout(() => {
//         const order = {
//             food: foodItem, status: "Chosen"
//         };
//         callback(order)
//     }, 1000)
// }

// function placeOrder(order, callback){
//     setTimeout(() => {
//         order.status = "Order Placed";
//         callback(order)
//     }, 1000)
// }

// function preparedFood(order, callback){
//     setTimeout(() => {
//         order.status = "Prepared";
//         callback(order)
//     }, 2000)
// }

// function packFood(order, callback){
//     setTimeout(() => {
//         order.status = "packed"
//         callback(order)
//     }, 1000)
// }

// function deliverOrder(order, callback) {
//     setTimeout(() => {
//         order.status = "Delivered";
//         callback(order)
//     }, 2000)
// }

// // executing with the callbacks
// // deep nesting callback hell
// // difficult to debug
// // no proper error handling

// chooseFood("Biryani", (order) => {
//     placeOrder(order, (order) => {
//         preparedFood(order, (order) => {
//             packFood(order, (order) => {
//                 deliverOrder(order, (order) => {
//                     console.log("final order status", order)
//                 })
//             })
//         })
//     })
// })

// we can fix this callback issue using the promise


function chooseFood(foodItem){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`1.Food choosen : ${foodItem}`)
            resolve({food: foodItem, status: "Chosen"})   
        }, 1000)
    })
   
}

function placeOrder(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Order Placed";
            console.log("2. Order is Placed", order)
            resolve(order)
        }, 1000)
    })
}

function preparedFood(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Prepared";
            console.log("3. Food is being prepared :",  order)
            resolve(order)
        }, 1000)
    })
}

function packFood(order){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Packed";
            console.log(`4. Food is packed : `, order)
            resolve(order)
        }, 1000)
    })
}

function deliverOrder(order) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            order.status = "Delivered";
            console.log(`5. Order delivered :` ,order)
            resolve(order)
        }, 1000)
    })
}


async function orderFood(foodItem) {
    try {
        let order = await chooseFood(foodItem);
        order =  await placeOrder(order);
        order =  await preparedFood(order);
        order =  await packFood(order);
        order =  await deliverOrder(order);
        console.log('Enjoy your meal', order)


    } catch (error) {
        console.log('Error processing the order', error)
    }

}

orderFood("biriyani");


// chooseFood("biriyani")
//     .then(placeOrder)
//     .then(preparedFood)
//     .then(packFood)
//     .then(deliverOrder)
//     .then((order) => console.log("Final order status is", order))



// chooseFood("Biryani", (order) => {
//     placeOrder(order, (order) => {
//         preparedFood(order, (order) => {
//             packFood(order, (order) => {
//                 deliverOrder(order, (order) => {
//                     console.log("final order status", order)
//                 })
//             })
//         })
//     })
// })


// aync await makes asynchronous operartions easy to read and write
// It is widly we are going to use for API fetching, auth...
