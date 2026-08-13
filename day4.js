// // Objects

// const user = {
//     id: 1,
//     name : "John",
//     isActive : true
// }

// console.log(user.name) // dot notation
// console.log(user['name']) // bracket notation

// // Bracket notation matters when the key is dynamic:
// const field = 'name'
// console.log(user[field])

// // Nested Objects
// // const response = {
// //   status: 200,
// //   data: {
// //     user: {
// //       id: 1,
// //       name: 'sara'
// //     }
// //   }
// // }

// // console.log(response.data.user.name);

// Optional chaining (?.) lets you safely access nested object properties and returns undefined instead of throwing an error if any part of the chain is null or undefined.
const response = { data : null };
// console.log(response.data.user.name);  // type error
console.log(response?.data?.user?.name); // undefined

// Destructuring : Pulling values out of an object into their own variables.
const person = {
  name: "Alice",
  age: 25,
  city: "Delhi"
};
const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 25

// // You can rename while destructuring:
const { name : userName } = person
console.log(userName);

// // You can set defaults for missing properties:
const { role = 'Guest' } = user
console.log(role);

// Object.keys, Object.values, Object.entries
const student = { id: 1, name: 'sara', isActive: true };
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// // JSON : JSON is just text that represents an object/array. APIs send and receive JSON as strings, not real JS objects — you have to convert.

const female = { id:9, name:'Monica Bellucci' }
const jsonString = JSON.stringify(female)
console.log(jsonString)  
console.log(typeof jsonString); // string


const parsedBack = JSON.parse(jsonString);
console.log(parsedBack.name); // object

console.log(female);
console.log(typeof female); // object

console.log('---------------------------------------------------------------------------------')
// 5 coding exercises
// Create an object product with name, price, and inStock. Destructure name and price into their own variables and log them.
    const product  = {
                name : 'sneakers',
                price: 899,
                inStock: true           
    }
            const { name, price } = product
            console.log(name);
            console.log(price);

// Create a nested object order = { id: 101, customer: { name: 'sara', address: { city: 'Pune' } } }. Log the city using dot notation, then log it again using ?. chaining.
        const order  = { id: 101, 
            customer: { name: 'sara', 
                address: { city: 'Pune' }
             } 
              }
        
        console.log(order.customer.address.city)
        console.log(order.customer?.address?.city)

// Create an object apiResponse = { status: 200, data: null }. Try to safely log apiResponse.data?.user?.email without crashing. Log the result.
              const apiResponse = { status: 200, data: null}
              console.log(apiResponse.data?.user?.email);

// Given const config = { env: 'staging', retries: 2, headless: true }, use Object.keys to log an array of all its property names.
    const config = { env: 'staging', retries: 2, headless: true }
              console.log(Object.keys(config));
              
// Create an object testUser = { username: 'sara99', password: 'pass123' }. Convert it to a JSON string with JSON.stringify and log the string. 
// Then parse it back with JSON.parse and log the username from the parsed result.

            const testUser = { username: 'sara99', password: 'pass123'}
            
              const jsonString = JSON.stringify(testUser)
              console.log(jsonString);

              const parseBack = JSON.parse(jsonString)
              console.log(parseBack.username)

// 3 automation tasks
// Create an object representing an API login response: { status: 200, body: { token: 'abc123', user: { id: 1, name: 'sara' } } }. 
// Destructure status directly from the object, and separately extract token and name using nested access. Log all three.

            const loginResponse = { status: 200, 
                                    body: { token: 'abc123', 
                                        user: { id: 1, name: 'sara' } 
                                                        } 
                                                            }
                const { status } = loginResponse
                console.log(status)

                console.log(loginResponse.body.token);
                console.log(loginResponse.body.user.name);

// Create an object testConfig = { browser: 'chromium', env: 'staging' } — note it has no retries property.
//  Destructure retries with a default value of 1. Log the destructured retries to confirm the default kicked in.
                const testConfig = { browser: 'chromium', env: 'staging' }
                 const { retries = 1 } = testConfig
                console.log(retries);

// Create an array of two objects: const apiUsers = [{ id: 1, name: 'sara' }, { id: 2, name: 'john' }]. 
// Convert the whole array to a JSON string and log it. This simulates what you'd send in a POST request body.              
   
                const apiUsers = [{ id:1, name: 'sara'}, { id:2, name: 'john'}]
                const jsConv = JSON.stringify(apiUsers)
                console.log(jsConv)
                




// Debugging challenge
const response = { status: 200 };
console.log(response.data?.user?.name)

//it throws the error "Cannot read properties of undefined". To log undefined, we need opional chaining. response.data is undefined. Trying to access .user on undefined throws an error. 
// Optional chaining (?.) stops if a value is null or undefined, so response.data?.user?.name safely returns undefined instead of crashing.
