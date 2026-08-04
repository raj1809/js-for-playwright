// const users = ['sara', 'john', 'mike'];
// console.log(users[0])
// console.log(users.length);
// console.log(users.length - 1);
// console.log(users.length + 1);
// console.log(users[4]);


// const users = ['sara', 'john']
// users.push('mike')
// console.log(users)
// console.log(users.includes('rampage'))
// console.log(users.includes('sara'))
// console.log(users.includes('SARA'))
// console.log(users.join(', '))
// console.log(users.slice(0, 2))

// forEach — run code for each item, returns nothing:
const userss = ['sara', 'john', 'mike']             // 1. Basic Iteration
userss.forEach( user => console.log(`Hello ${userss}`))

const names = ['aice', 'bob', 'van Damme']  // 1. Basic Iteration
names.forEach( name => console.log(name))

const fruits = ['apple', 'orange', 'banana'] // 2. using value and index
fruits.forEach((name, index ) => {
    console.log(`${index}: ${name}`)
})


// map — transform each item, returns a new array of the same length:
const prices = [100, 200, 300];
const withTax = prices.map(p => p * 10)
console.log(withTax)

// filter — keep only items matching a condition, returns a new (possibly shorter) array:
const ages = [15, 22, 17, 30]
const adults = ages.filter(age => age >= 18)
console.log(adults)

// find — return the first item matching a condition (not an array — a single item, or undefined if none match):
const users = [{ id: 1, name: 'sara' }, { id: 2, name: 'john' }]
const found = users.find(u => u.id === 2)
const found1 = users.find(p => p.name === 'sara')
console.log(found)
console.log(found1);

console.log("**************************************************************");

5 coding exercises
