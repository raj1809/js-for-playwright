// function: a reusable block of code that takes input and (usually) returns a value.
//e.g 
    // function add(a,b) {
    //     return a + b
    // }
    //  console.log(add (10, 11));
     
// arrow function : a shorter way to write a function, using =>.
//If the function body is a single return statement, you can drop the braces and return keyword entirely:
// const add = (a, b) => a + b
// one paraeter doesn't need parantheses 
const square = x => x * x
// No parameters still need empty parentheses:
// const greet = () => console.log("hi")

// Parameters, Default Values, Return
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}

console.log(greet());        // Hello, Guest
console.log(greet('Sara'));  // Hello, Sara
// default parameters let a helper function work with sensible fallbacks — e.g. defaulting to the staging environment if none is passed in.
// A function without a return gives back undefined — this is intentional in JS, not a bug, but it trips people up when they expect a value and get undefined instead.

// Callbacks: a function passed into another function, to be run later.
// function runTest(name, testFn) {
//   console.log(`Running: ${name}`);
//   testFn();
// }
// runTest('Login test', () => {
//   console.log('Test executed');
// })

console.log("***************************************************************************************************")

// 5 coding exercises
//1. Write a regular function called multiply that takes two numbers and returns their product. Log multiply(4, 5).
    function  multiply(a, b){
        return a * b
    }
        console.log(multiply(4, 5));
        
// Rewrite multiply as an arrow function using the short, no-braces form.

    const multiplyy = (p, q) =>  p * q
    console.log(multiplyy(11, 11))

// Write an arrow function isEven that takes one number and returns true or false depending on whether it's even. (Hint: num % 2 === 0)

    const isEven = num => num % 2 === 0 
    console.log(isEven(68))
    
// Write an arrow function greetUser with a default parameter role = 'guest'. 
// It should return Welcome, guest or Welcome, admin depending on what's passed in. Call it once with no argument, once with 'admin'.

const greetUser = (role = 'guest') => `Welcome ${role}`
    console.log(greetUser());
    console.log(greetUser("admin"))

// Write a function runStep that takes a stepName (string) and a stepFn (a callback function). It should log Running step: <stepName>, then call stepFn(). Call it with a step name and an arrow function that logs Step complete.
function runStep(stepName, stepFn) {
    console.log(`Running step: ${stepName}`)
        stepFn()
}
 runStep('Test', () => {
        console.log("Step completed")
 })

 // 3 automation tasks
// Write an arrow function buildLoginUrl that takes an env parameter (default 'staging') and returns the full URL: https://<env>.myapp.com/login. Call it once with no argument and once with 'prod'.

const buildLoginUrl = (env = 'staging') => `https://${env}.myapp.com/login`
console.log(buildLoginUrl())
console.log(buildLoginUrl('prod'))

// Write an arrow function checkStatus that takes a statusCode number and returns the string 'PASS' if it's 200, otherwise 'FAIL'. Call it with 200 and with 404, logging both results.
       
const checkStatus = statusCode => statusCode === 200 ? 'PASS' : 'FAIL'
console.log(checkStatus(200))
console.log(checkStatus(404))

// Write a function logTestResult that takes testName and a callback getResult (a function with no arguments that returns 'PASS' or 'FAIL'). It should log: <testName>: <result>. 
// Call it with a test name and an arrow function that returns 'PASS'.

function logTestResult(testName, getResult){
    console.log(`${testName} : ${getResult()}`)

}
    logTestResult('Test result', () => {
        return 'PASS'
    })

// Debugging challenge
    const getTotal = (a, b) => {return a + b}
console.log(getTotal(10, 5));
// when an arrow function uses { }, JavaScript treats it as a function body, not an implicit return. Inside a { } body, nothing is returned unless you write return explicitly. 
// Without braces, the single expression is auto-returned; with braces, you opted into "full function body" mode and gave up the auto-return.