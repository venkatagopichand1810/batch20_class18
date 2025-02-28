function loginUser(username, password) {
    console.log("Logging in.....")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === "admin" && password === "12345") {
                resolve("Login Successfull")
            } else {
                reject("Invalid credentials")
            }
        }, 2000)
    })
}

// async function userLogin() {
//     try {
//         let message = await loginUser("admin", "12345");
//         console.log(message)

//     } catch (error){
//         console.log(error)
//     }
// }

// userLogin()

function userLogin() {
    loginUser("admin", "12345")
        .then(message => console.log(message)) //success case
        .catch(error => console.log(error)); 
}

userLogin()



// used to write simple code when we do asynchronous code.
// Async/await provides the more cleaner and readable code to handle the promise...we can can avoid .then and catch