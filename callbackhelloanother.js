function placeOrder(food, callback) {
    setTimeout(() => {
        console.log(`Order placed for ${food}`);
        callback()
    }, 1000)
}

function confirmOrder(callback) {
    setTimeout(() => {
        console.log("Restaurant confired the order");
        callback()
    }, 1000)
}

function prepareFood(callback) {
    setTimeout(() => {
        console.log("Food is being prepared");
        callback()
    }, 2000)
}

function assignDeliveryPartner(callback) {
    setTimeout(() => {
        console.log("Devliery partner assigned");
        callback()
    }, 1000)
}


function outForDelivery(callback) {
    setTimeout(() => {
        console.log("Food is out for Delivery");
        callback()
    }, 2000)
}

function deliverOrder(callback) {
    setTimeout(() => {
        console.log("Order is delivered");
        callback()
    }, 1000)
}

// callback hell(pyramid of Doom)

placeOrder("Pizza", function() {
    confirmOrder(function () {
        prepareFood(function () {
            assignDeliveryPartner(function () {
                outForDelivery(function() {
                    deliverOrder(function() {
                        console.log("Enjoy your food")
                    })
                })
            })
        })
    })
})