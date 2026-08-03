let day = "Monday"
let name = "Susan"

// console.log(`I am going to Japan on ${day} with ${name}`);

// falsy list: false, 0, '' (empty string), null, undefined, NaN
// use === and !== always
// if (condition) {
//    block of code to be executed if the condition is true
// } else {
//     block of code to be executed if the condition is false
// }

// example: If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

// let hour = 11
// if (hour < 18){
//     console.log("Good day")
// } else {
//     console.log("Good evening");
    
// }

// Example: If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":

// let time = 100

// if (time < 10){
//     console.log("Good morning")
// } else if (time < 20)
// {
//     console.log("good day");
// } else {
//     console.log("good evening")
// }

//ternary operator: The conditional operator is a shorthand for writing conditional if...else statements. It is called a ternary operator because it takes three operands
// syntax =>  (condition) ? expression1 : expression2

// 5 coding exercises:
// 1. Declare const baseUrl = 'https://www.saucedemo.com' and const username = 'standard_user'. Using a template literal, log: Logging in as standard_user at https://www.saucedemo.com
const baseUrl = 'https://www.saucedemo.com'
const username = 'standard_user'
console.log(`Logging in as ${username} at ${baseUrl}`);


// 2. Given const price = '499' and const tax = 50, log the correct numeric total. It must print 549, not 49950.

const price = '499'
const tax = 50
console.log(`${Number(price) + tax}`)

// 3. Declare const env = 'prod'. Using ===, log Running on PROD or Running on STAGE.

const env = 'prod'
if(env === 'prod'){
    console.log("Running on PROD")
} else {
    console.log("Running on STAGE");    
}

// 4. For each of these five values, log the value and whether it's truthy or falsy: 0, 'admin', '', undefined, 'false'.
console.log(0, Boolean(0))
console.log('admin', Boolean('admin'))
console.log('', Boolean(''))
console.log(undefined, Boolean(undefined))
console.log('false', Boolean('false'))

// Given const testUserId = 42, build and log the dynamic locator string #user-row-42 using a template literal.

const testUserId = 42
console.log(`#user-row-${testUserId}`);

// 3 automation tasks
// 1. Declare const expectedTitle = 'Swag Labs' and const actualTitle = 'Swag Labs'. Compare with === and log PASS or FAIL. Then change actualTitle and confirm it logs FAIL.

const expectedTitle = 'Swag Labs' 
const actualTitle ='Swag Labs'

if( expectedTitle === actualTitle){
    console.log("PASS")
} else {
    console.log("FAIL");
}

// 2. Declare const statusCode = 201. Log Created for 201, OK for 200, and Unexpected status: <code> for anything else.
    const statusCode = 200
    if (statusCode === 201){
        console.log("Created")   
    } else if (statusCode === 200) {
        console.log("OK")
    } else {
        console.log(`Unexpected status : ${statusCode}`)
    }

// 3. Declare const suiteName,const passed,and const failed.Using one template literal,log:Suite: Login | Passed: 8 | Failed: 2 | Total: 10 — where Total is calculated, not hardcoded.

const suiteName = "Login"
const passed = 8
const failed = 2

console.log(`Suite: ${suiteName} | Passed: ${passed} | Failed: ${failed} | Total: ${passed + failed}`);

// Debugging challenge
// 1. 
const result = 'Total: ' + 10 + 5;
console.log(`Total: ${10  + 5}`)

// `${}` evaluates the expression **before** converting it to a string. So `10 + 5` is calculated as `15` first, then inserted into the template literal, producing `"Total: 15"` instead of concatenating from left to right.


// 2. 
let status = 'active';
if (status = 'inactive') {
  console.log('User is inactive');   // why does this print?
}
// That's `=`, not `===`. `=` assigns `'inactive'` to `status`, and since `'inactive'` is truthy, the `if` block always runs.
