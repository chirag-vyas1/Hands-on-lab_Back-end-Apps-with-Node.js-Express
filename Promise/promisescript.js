//creating a promise . the promise will get resolved when timer out after 6 seconds
let mypromise = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve("promise resolved")
    }, 1000);
    
    })
    
    //Console log before calling the promise
    console.log("before calling promise")
    
    //Call the promise and wait for it to be resolved and then print a message.
    mypromise.then((successMessage) => {
        console.log("From Callback " + successMessage)
      })
    //Console log after calling the promise
      console.log("After calling promise");
    
    
    