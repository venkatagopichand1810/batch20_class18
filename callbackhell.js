//callback hell happen when muliple asyc operations are 
// nested inside each other.


function loginuser(username, password, callback){

    setTimeout(() => {
        console.log("User is logged in");
        callback()
    }, 1000)
 
};

function fetchUserdata(callback){

    setTimeout(() => {
        console.log("Fetched the user data");
        callback()
    }, 1000)
 
}

function getOrderDetails(callback){

    setTimeout(() => {
        console.log("Fetched the user order details");
        callback()
    }, 1000)
 
}

function processPayment(callback){

    setTimeout(() => {
        console.log("Payment process successfully");
        callback()
    }, 1000)
 
}

loginuser("venkat", "welcome123", function() {
    fetchUserdata(function() {
        getOrderDetails(function () {
            processPayment(function () {
                console.log("order completed")
            })
        })
    })
})