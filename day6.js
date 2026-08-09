
// Create a class Product with a constructor taking name and price. Add a method getSummary() that returns <name>: $<price>. Create an instance and log getSummary().

// class Product {
//         constructor(name, price) {
//             this.name = name
//             this.price = price
//         }

//             getSummary(){
//                 return `${this.name} : ${this.price}`
//             }
// }

//     const test = new Product('sara', 51)
//     console.log(test.getSummary());
        
// Create a class Calculator with a constructor taking a starting value. Add methods add(n) and subtract(n) that update this.value, and a method getValue() that returns it. 
// Create an instance starting at 10, call add(5), then subtract(3), then log getValue() (should be 12)

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
    const calculate = new Calculator(10)
    calculate.add(5)
    calculate.subtract(3)
        console.log(calculate.getValue());
    
// Create a BasePage class with a constructor storing this.page (just accept any value for page, e.g. a string like 'fake-page-object' since we don't have real Playwright yet). 
// Create a LoginPage class that extends BasePage, using super(), and adds one method getPageName() returning 'Login Page'.
//  Instantiate LoginPage and log both this.page (via a getter method you add) and getPageName().

class BasePage {
    constructor(page) {
        this.page = page;
    }

    getPage() {
        return this.page;
    }
}

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async getPageName() {
        return 'Login Page';
    }
}

const loginPage = new LoginPage('fake-page-object');

console.log(loginPage.getPage());
console.log(await loginPage.getPageName());


