// JavaScript is synchronous by default, but it supports asynchronous operations.
// sync behavior:
    console.log("Start")
    for(let i=0; i<=5; i++){
        console.log(i);
    }
    console.log("Executed");
    console.log("-----------------------------------");
    
// async behavior:
    console.log("Start");
    setTimeout(() => {
        console.log('Timeout is completed');
    }, 5000);
    console.log('Executed');
    
// Promises are a way to handle asynchronous operations in a more organized and readable manner

