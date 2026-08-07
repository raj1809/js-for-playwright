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

const randomNumberPromise = new Promise((resolve, reject) => {
    //async operation
        setTimeout(() => {
                const randomValue  = Math.random()
                if (randomValue > 0.5) {
                    resolve(randomValue)
                } else {
                    reject(new Error('Value is too small'))
                    console.log(randomValue);
                    
                }
        }, 2000);
})
    randomNumberPromise
                .then(result => {
                    console.log('Promise is fulfilled ', result);    
                })
                .catch(error => {
                    console.log('Promise is rejected ', error);
                })

// promise chaining

                function getEvenNum(value, delay){
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                    if(value % 2 === 0){
                                        resolve(value)
                                    } 
                                    else {
                                            reject(new Error('Value is not even number'))

                                    }
                            }, delay);
                        })
                }

                    // chaining
                    getEvenNum(4, 1000)
                                .then(result => {
                                    console.log('Step 1: getting result with even number', result);
                                    return getEvenNum(6.5, 1000)
                                })

                                    .then(result => {
                                        console.log('Step 2: getting result with odd number', result);
                                    })
                                    .catch(error => {
                                        console.log('Promise error', error.message);  
                                    })

promise.all()

                                    const function1 = () =>  {
                                        return new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                //resolve('Data from function 1')
                                                const data =[1, 2, 3, 4]
                                                resolve(data)
                                            }, 2000);
                                        })
                                    }

                                    const function2 = () =>  {
                                        return new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                //resolve('Data from function 1')
                                                const data =[5, 6, 7, 8]
                                                resolve(data)
                                            }, 2000);
                                        })
                                    }

                                    const function3 = () =>  {
                                        return new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                               //  resolve('Data from function 1')
                                                const data =[9, 10, 11, 12]
                                                resolve(data)

                                            }, 2000);
                                        })
                                    }

                                    Promise.all([
                                        function1(), 
                                        function2(), 
                                        function3()
                                    ])
                                    .then(dataArray => {
                                        console.log('All data from different functions', dataArray);
                                    })
                                    .catch(error => {
                                        console.log('Error in promise', error);
                                    })