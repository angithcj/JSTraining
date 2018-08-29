
var a= 1 + '2';
console.log(a);// prints 12 since 1 is coerced to '1' by the JS engine

var mVar="hi"

if(mVar){
  console.log("something is there!")
  // mVar is coerced to true
  // mVar is false if it is empty string,undefined or null
}

var a=1, b='1';

if(a==b){
  console.log("a==b");// == convert to same types and compare
}
if(a===b){
  console.log('a===b'); // === consider the case of types also.
}


function greet(name){
  name = name || '<Your name heare>'
  console.log("Hello "+ name);
}
greet('tony');
greet();
