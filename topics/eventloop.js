console.log("Hello World");

setTimeout(() => {
    console.log("Inside setTimeout");
},3000);

console.log("End of the code");

// browser -> queue -> event loop -> call stack