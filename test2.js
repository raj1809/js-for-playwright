// Create a BasePage class with a method logAction(action) that logs Action performed: <action>. 
// Create a CheckoutPage extends BasePage with a method checkout() that calls this.logAction('checkout'). 
// Instantiate CheckoutPage and call checkout().

class BasePage {
      

        logAction(action){
            console.log(`Action performed: ${action}`)
            
        }
}

class CheckoutPage extends BasePage{
   
         checkout(){
                this.logAction('checkout')
         }
}
    const checkoutpage = new CheckoutPage()
       checkoutpage.checkout()
        