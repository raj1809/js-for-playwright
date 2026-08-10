//Debugging challenge


class Counter {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count = this.count + 1; 
  }
}

const c = new Counter();
c.increment();
console.log(c.count);



//  ReferenceError: count is not defined Because count by itself is looking for a local variable or a variable in an outer scope. It is not referring to this.count