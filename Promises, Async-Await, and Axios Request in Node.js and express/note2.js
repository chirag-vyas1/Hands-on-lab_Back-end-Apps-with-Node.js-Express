// Import the 'fs' module and use its promise-based methods
// 1.4 Example: Reading a file
// Here's an example using the fs.promises module to read a file. The fs.promises module provides Promise-based methods for file system operations.

const fs = require('fs').promises;

// Read the content of the file 'example.txt' with 'utf8' encoding

fs.readFile('example.text','utf8')

//handle the resolves state of the promise

.then((data)=>{
    // This block will execute if the file is read successfully
    console.log(data); 
})

// Handle the rejects state of the promise

.catch((err)=>{
    // This block will execute if there's an error reading the file
    console.error("Error reading file this :",err);
});