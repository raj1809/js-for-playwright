const users = ['sara', 'john', 'mike'];
console.log(users[0])
console.log(users.length);
console.log(users.length - 1);
console.log(users.length + 1);
console.log(users[4]);


const users = ['sara', 'john']
users.push('mike')
console.log(users)
console.log(users.includes('rampage'))
console.log(users.includes('sara'))
console.log(users.includes('SARA'))
console.log(users.join(', '))
console.log(users.slice(0, 2))

// forEach — run code for each item, returns nothing:
const userss = ['sara', 'john', 'mike']             // 1. Basic Iteration
userss.forEach( user => console.log(`Hello ${userss}`))

// const names = ['aice', 'bob', 'van Damme']  // 1. Basic Iteration
// names.forEach( name => console.log(name))

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

// 5 coding exercises

// 1. Given const names = ['sara', 'john', 'mike', 'ana'], use map to create a new array with each name in uppercase. Log it.
const names = ['sara', 'john', 'mike', 'ana']
const uppercase = names.map( r => r.toUpperCase())
console.log(uppercase);

// 2. Given const nums = [4, 9, 15, 22, 7], use filter to get only numbers greater than 10. Log the result.
const nums = [4, 9, 15, 22, 7]
const greaterNum = nums.filter( num => num > 10 )
console.log(greaterNum);

// 3. Given const products = [{id: 1, name: 'Shirt'}, {id: 2, name: 'Shoes'}, {id: 3, name: 'Hat'}], use find to get the product with id === 2. Log its name.
const products = [{id: 1, name: 'Shirt'}, {id: 2, name: 'Shoes'}, {id: 3, name: 'Hat'}]
const findProduct = products.find( i => i.id === 2)
console.log(findProduct.name)
console.log(findProduct)

// Given const cartItems = ['Shirt', 'Shoes'], check with includes whether 'Hat' is in the cart, and log In cart or Not in cart.
const cartItems = ['Shirt', 'Shoes']
console.log(cartItems.includes('Hat') ? 'In cart' : 'Not in cart')

// Given const scores = [70, 85, 40, 95, 60], use every to check if all scores are >= 50, and log the boolean result.
const scores = [70, 85, 40, 95, 60]
console.log(scores.every(s => s >= 50));

// 3 automation tasks
// Given const testResults = ['PASS', 'FAIL', 'PASS', 'PASS', 'FAIL'], use filter to get only the 'FAIL' entries, then log how many there are using .length.

const testResults = ['PASS', 'FAIL', 'PASS', 'PASS', 'FAIL']
const failCount = testResults.filter( fc => fc === 'FAIL')
console.log(failCount.length);

// Given const inventory = [{name: 'Widget', inStock: true}, {name: 'Gadget', inStock: false}, {name: 'Gizmo', inStock: true}], use filter
//  and then map (chained) to log an array of just the names of in-stock items.
const inventory = [{name: 'Widget', inStock: true}, {name: 'Gadget', inStock: false}, {name: 'Gizmo', inStock: true}]
const inStockNames = inventory
                      .filter( k => k.inStock)
                      .map( k => k.name)
console.log(inStockNames)

// Given const responseCodes = [200, 200, 404, 200], use some to check if any request failed (not 200), and log Some requests failed or All requests succeeded.
const responseCodes = [200, 200, 404, 200]
console.log(
  responseCodes.some(code => code !== 200)
    ? 'Some requests failed'
    : 'All requests succeeded'
);

//Debugging challenge: To create a new array, use map():
const nums1 = [1, 2, 3, 4, 5];
const doubled = nums1.map(n => n * 2);
console.log(doubled);

// because forEach() is meant for side effects (like logging or modifying something), not for creating a new array.