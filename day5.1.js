// 5 coding exercises
// Write an async function getUsername that simply returns the string 'sara99'. Write a second async function run that awaits getUsername() and logs the result.

    async function getUsername() {
            return 'sara99'
    }

    async function run() {
            const result = await getUsername()
            console.log(result);     
    }
         run()
// Write a function delay(ms) that returns a Promise resolving after ms milliseconds using setTimeout. Then write an async function that awaits delay(1000) and logs '1 second passed' after.
            function delay(ms){
                return new Promise((resolve ) => {
                    setTimeout(resolve, ms)
                })
            }

                async function test(){
                    await delay(1000)
                      console.log("1 second passed")
                }
                test()

// Write an async function getPrice that returns 499 (just a plain return — no delay needed). Write another async function that awaits it, adds 50 tax, and logs the total.

                async function getPrice() {
                        return 499
                }
                async function calculateTotal(){
                  const price =  await getPrice()
                    console.log(price + 50);
                }
                    calculateTotal()


// Take this broken code and fix it by adding the missing await:
async function getStatus() {
  return 'active';
}
async function run() {
  const status = await getStatus();
  console.log(status);
}
run();

// Write an async function getUser that returns { id: 1, name: 'sara' }. Write a second async function that awaits it, destructures name from the result, and logs it.

    async function getUser(){
            return { id: 1, name: 'sara' }
    }

    async function getUserDetails(){
    
         const{name} = await getUser()
             console.log(name);
    }
          getUserDetails()
       
        
// Debugging challenge:
async function getData() {
  return 'server response'
}

 async function run() {
  const result =   await getData()
  console.log(result)
}

run()

// run() called getData() without await, so result got the raw Promise object itself, not the string inside it. 
// console.log(result) would print something like Promise { 'server response' }, not 'server response'.
// The fix needed two changes: mark run as async (required to use await inside it), and add await in front of getData().

// 3 automation tasks
// Write an async function fakeApiCall that returns a Promise which resolves after 500ms with the value { status: 200, token: 'abc123' } 
// (use setTimeout inside a new Promise). Await it in another async function and log the status and token.

    async function fakeApiCall(){
        return new Promise((resolve) => {
                setTimeout(() => {
                       resolve ({ status: 200, token: 'abc123' })
                    
                }, 500);
        })
    }

        async function apiResponse(){
            const response = await fakeApiCall()
            console.log(response.status);
            console.log(response.token);
            
        }
                apiResponse()


// Write an async function fakeLogin that randomly succeeds or fails — use Math.random() > 0.5 to decide, 
// and either return 'PASS' or throw new Error('Login failed'). Call it from another async function wrapped in try/catch, 
// logging either the result or the caught error message. Run it a few times to see both outcomes.

                async function fakeLogin(){
                        const randomNum = Math.random()
                        if(randomNum > 0.5){
                            return 'PASS'
                        } else {
                            throw new Error('Login Failed')
                        }
                }

                async function getNumberInfo() {
                        try {
                                const result = await fakeLogin()
                                console.log('Result:', result);
                        } catch (error) {
                                console.log('Error', error.message);
                                
                        }
                }
                    getNumberInfo()
                    getNumberInfo()
                    getNumberInfo()
                    getNumberInfo()
                    getNumberInfo()


// Write two async functions, getOrderA and getOrderB, each returning a different fake order object after a short delay 
// (use setTimeout inside a Promise, 300ms and 600ms). 
// Use Promise.all to await both at once, then log both results.

                async function getOrderA() {
                     return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve ({ id: 1, item: 'Laptop' })
                        }, 300)
                    })
                }

                async function getOrderB() {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                    resolve({ id: 2, item: 'iPhone' })
                            }, 600)
                        })
                }

                async function runTest() {
                        const [orderA, orderB] = await Promise.all([
                                    getOrderA(),
                                    getOrderB()
                        ])         
                                console.log(orderA);
                                console.log(orderB);       
                    }
            
                        runTest()