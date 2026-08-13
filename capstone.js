
const testCases = [
  { name: 'Login with valid credentials', run: async () => true },
  { name: 'Login with invalid password', run: async () => { throw new Error('Invalid password'); } },
  { name: 'Add item to cart', run: async () => true },
  { name: 'Checkout with empty cart', run: async () => { throw new Error('Cart is empty'); } },
  {
    name: 'Load product page',
    run: async () => {
      await new Promise(resolve => setTimeout(resolve, 300)); // fake delay
      return true;
    }
  }
]

            let passed = 0
            let failed = 0

            for (const test of testCases){

                try {
                
                    const run = await test.run()
                    console.log(`PASS: ${test.name}`);
                    
                        passed++
                
                } catch (error) {
                    
                    failed+=1
                    console.log(`FAIL: ${test.name}`+ ' : ' + error.message)                    
                }
                
            }
                
                console.log(`Suite: Sample Suite | Passed: ${passed} | Failed: ${failed} | Total: ${passed + failed}`);
                
                

            const uppercase = testCases.map(test => test.name.toUpperCase());

                console.log(uppercase)

// Why does the team ban var? 
// Ans: it has confusing scope rules, allows accidental redeclarations

// What's the difference between null and undefined?
// Ans: null is a value assigned whearas undefined means the variable do not have any value assigned

// What happens if you forget await on an async call?
// The code will continue running immediately, but instead of getting the actual data, you get a pending Promise object

// Why does forEach fail silently when used with await inside it?
// Ans: forEach() does not wait for an async callback. It starts all callbacks, each callback reaches await, and then forEach() immediately finishes. 

// What's the difference between map and forEach?
// Ans:Map transform each item, returns a new array of the same length and forEach() iterates each item of array

// Why use ?. when reading API response data?
// Ans It lets you safely access nested object properties and returns undefined instead of throwing an error if any part of the chain is null or undefined

// What does retries ?? 5 protect against that retries || 5 doesn't?
// retries ?? 5     fallback ONLY if null/undefined (0 stays 0)
// retries || 5      fallback if ANY falsy value (0 becomes 5 — often wrong!)


// Why is the Page Object Model just "a class with this.page"?
// Ans: Because in Playwright, POM is basically a way to put everything related to one page in one place.
// The simplest mental model:
// POM = Page class + this.page + methods that interact with that page

// What's the difference between a named export and a default export, syntactically?
// Ans:  Named → use { }, Default → no { }

// What's actually inside a variable if you write const x = someAsyncFunction() without await?
// Ans: x contains a Promise, not the final result.

