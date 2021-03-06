// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parentFunc() {
  let myValue = 'Daddy Cool!';
  function childFunc() {
    console.log('Hello, ' + myValue);
  }
  return childFunc;
}

let testFunc = parentFunc();
testFunc();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

// Return a function that when invoked increments and returns a counter variable.

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count), //?
  };
};
  
  const newCounterFactory = counterFactory();
  newCounterFactory.increment(); // 1
  newCounterFactory.increment(); // 2
  newCounterFactory.increment(); // 3
  newCounterFactory.decrement(); // 2
  newCounterFactory.decrement(); // 1
