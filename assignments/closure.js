// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const myClosure = ( input => {
  let myArray = [];
  return input => { myArray.push(input); return myArray}; 
})();

for (var j=0; j<5; j++){
  console.log(myClosure(j));
}


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = ( _ => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return _ => {count++; return count};
})();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

for (var i=0; i<5; i++){
  console.log(counter());
}

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = ( _ => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;

  let operation = {
    inc: ( _ => {count++; return count}),
    dec: ( _ => {count--; return count})
  };
  return operation;
});

let numOperate = counterFactory();

for (var i=0; i<5; i++){
  console.log(numOperate.inc());
}

for (var i=0; i<5; i++){
  console.log(numOperate.dec());
}

