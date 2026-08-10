// Create a class LoginPage with a constructor accepting a username and password placeholder (just strings, no real Playwright yet). 
// Add a method login() that logs Logging in as <username>. 
// Add a method getCredentials() that returns { username, password } (store both on this in the constructor first). Instantiate it and call both methods.
class LoginPage {
     constructor(username, password){
            this.username = username
            this.password = password
    }

        login(){
            console.log(`Logging in as ${this.username}`);
            
        }

        getCredentials(){
            return { 
                    username : this.username,
                    password : this.password

            }
        }
}

   const test = new LoginPage('elon', '11111')
  test.login() 
console.log(test.getCredentials());


