// In a file mathHelpers.js, default export a class Calculator (can reuse exercise 2's class). In another file, import it as a default export and use it.

 class Calculator {
    constructor(value) {
        this.value = value
    }
            add(n){
               this.value = this.value + n
            }
         

            subtract(n){
                this.value = this.value - n
            
            }

            getValue(){
                return this.value
            }
}   
   export default Calculator;