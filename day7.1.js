// Given const names = ['sara', 'john', 'mike'], use for...of to log each name, but break the loop as soon as you hit 'john' (so 'mike' never logs).

const names = ["sara", "john", "mike"];
for (const name of names) {
  if (name === "john") break;
  console.log(name);
}

// Write a function divide(a, b) that throws an Error with message 'Cannot divide by zero' if b is 0, otherwise returns a / b.
// Call it inside a try/catch twice — once with b = 0, once with a valid value — logging either the result or the error message.

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}

try {  
  console.log(divide(10, 5));
} catch (error) {
  console.log(error.message);
}

// Given const baseConfig = { browser: 'chromium', retries: 1 }, use spread to create ciConfig that keeps everything from baseConfig but overrides retries to 3. Log ciConfig.

const baseConfig = {
  browser: "chromium",
  retries: 1,
};

const ciConfig = {
  ...baseConfig,
  retries: 3,
};
console.log(ciConfig);

// Given const rawText = '   Hello World   ', chain trim() and toLowerCase() together and log the result.

const rawText = "   Hello World   ";
console.log(rawText.trim().toLowerCase());

// Given const retries = 0, log the result of retries ?? 5 and explain (in a comment) why it's different from retries || 5.

const retry = 0;
console.log(retry ?? 5); // 0 — ?? only uses 5 when retries is null or undefined
console.log(retry || 5); // 5 — || treats 0 as falsy, so it replaces it with 5

// a valid 0 (e.g. "0 retries" or "0% delay") getting wrongly replaced by a fallback because || doesn't distinguish "falsy" from "missing."

// automation tasks
// Given const rows = ['Row1', 'Row2', 'Row3', 'Row4'], use for...of with continue to skip 'Row2' but log all the others.

const rows = ["Row1", "Row2", "Row3", "Row4"];
for (const row of rows) {
  if (row === "Row2") continue;
  console.log(row);
}

// Write a function getEnvUrl(env) that throws an error 'Unsupported environment' if env isn't 'staging' or 'prod',
// otherwise returns https://<env>.myapp.com. Wrap two calls in try/catch — one with 'staging', one with 'qa' — logging the result or error for each.

function getEnvUrl(env) {
  if (env !== 'staging' && env !== 'prod') {
    throw new Error("Unsupported environment")
  } 
    return `https://${env}.myapp.com`
}

try {
        console.log(getEnvUrl('staging'))
    } catch (error) {
  console.log(error.message)
}

try {
  console.log(getEnvUrl('qa'))
} catch (error) {

  console.log(error.message)
}

// Given const scrapedText = '  Order #12345 - Confirmed  ', clean it with trim(), then use includes() to check if it contains 'Confirmed', logging Order confirmed or Order not confirmed.

 const scrapedText = '  Order #12345 - Confirmed  '
    const sc = scrapedText.trim()    
    if(sc.includes('Confirmed')){
            console.log('Order confirmed')
    } else {
        console.log('Order not confirmed');
        
    }
// also, we can do
    // if (scrapedText.trim().includes('Confirmed')){
    //           console.log('Order confirmed')
    // } else {
    //     console.log('Order not confirmed');
        
    // }

// debugging challenge:

const items = ['a', 'b', 'c'];
    for (const item of items){
            await new Promise(resolve => setTimeout(resolve, 100));
            console.log(item)
    }

console.log('Loop finished');

// forEach() does not wait for an async callback. It starts all three callbacks, each callback reaches await, and then forEach() immediately finishes. 

