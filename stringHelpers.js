// In a file stringHelpers.js, write and export two named functions: toUpperCaseFirst(str) (capitalizes the first letter) and reverseString(str). 
// In a separate file, import both and log the results for the input 'sara'.

export function toUpperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}


export function reverseString(str) {
            return str.split('').reverse().join('')
    }
