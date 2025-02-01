// Creating a new Promise object and assigning it to the variable myPromise

const mypromise = new Promise((resolve,reject)=>{

  // Simulating a condition with a boolean variable 'success'
    let success = false

    // If the condition is true, call resolve to mark the promise as fulfilled
    if (success){
        resolve('Promise is resolved')
    }

    else{
        reject('Promise is rejected')
    }

})

// Execute the promise and handle the fulfilled and rejected states
mypromise.then((message)=>{
    // This block will execute if the promise is resolved
    console.log(message)// "The operation was successful!"

}).catch((error)=>{
     // This block will execute if the promise is rejected
    console.error(error); // "The operation failed!"
})