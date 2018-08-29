/*
In execution stack, first global execution context is pushed.
when a is called,then a is pushed stopping the current execution of global execution context.
when b is finished, it is poped from stack and continue executing a.and so on
*/
function b(){
  var mVar; // environment variable .Scope is limited in function b.
  console.log(mVar); // prints undefined
}

function a(){
  var mVar=1;
  console.log(mVar); // prints 1
  b();
}

var mVar=2; // global variable. Referenced to every lexical environment.
console.log(mVar); // prints 2
a();
