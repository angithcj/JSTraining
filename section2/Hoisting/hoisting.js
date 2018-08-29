
b();  // call the function b and prints
console.log(a); // prints undefined
/*
execution context has 2 phases.Creation phase and execution phase.
in creation phase, setup memory space for variables and functions.It is called Hoisting.
*/
var a="hello world"
a=undefined;

function b(){
  console.log("Called b");
}
