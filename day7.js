// Spread ...  "Take things OUT."
// const fruits = ["apple", "banana", "mango"];
// console.log(fruits);
// console.log(...fruits);
// Spread with arrays
const fruit = ["apple", "banana", "mango"];
const veggies = ['potato', 'cauliflower', 'okra']
const food = [...fruit, ...veggies]                 // ... unpacks both arrays.
console.log(food);

// Copying an array
const users = ["Raj", "Sara", "John"];
const copy = [...users];                     // "Take everything from users and put it into a new array."
console.log(copy);   

// Spread with objects
const user = { name: 'king', age: 32}
const newUser = {...user}
console.log(newUser);

// adding/changing object values

const updatedUser = {
    ...user,
    age: 28
};

console.log(updatedUser)

// Rest: Collect things IN
function addNumbers(...numbers){
        console.log(numbers)     
}

addNumbers(10, 20, 30, 40, 50) // ...numbers collects all the arguments into an array: numbers = [10, 20, 30, 40]

// Why is it called REST? Because it collects the rest of the values.

function test(first, ...others) {
    console.log(first)
    console.log(others)
}

test("Raj", "Sara", "John", "Mike")

// String Methods

const raw = '  Sara@Example.com  ';

console.log(raw.trim());                    // 'Sara@Example.com' — removes outer whitespace
console.log(raw.trim().toLowerCase());       // 'sara@example.com'
console.log(raw.includes('@'));              // true
console.log(raw.trim().split('@'));          // ['Sara', 'Example.com']
console.log(raw.trim().replace('Sara', 'John')); // 'John@Example.com  ' (note: trim only applied once here)
console.log(raw.trim().startsWith('Sara'));  // true

// Basic regex
const price = 'Price: $499';
console.log(/\$\d+/.test(price)); // true — "does this string contain a $ followed by digits"

// Playwright preview — regex directly in a locator
// await page.getByText(/Welcome, .+/).isVisible();