
/*
 in JS semicolon is optional.JS engine put semiColon for you
But it is too dangerous
*/

function getName(){

  return   // engine will put a semicolon here
  {
    name:'tony'
  }
}

console.log(this.getName()); // prints undefined

// Immediately invoked function expression

var personName = 'peter';
var greeting = "Hola";
(function(name){
    var greeting = 'hello'
    console.log(greeting+' '+ name);

}(personName));

console.log(greeting); // prints Hola
/*
IIFE runs in different execution context.So greeting in IIFE is stored in
different memory location
*/

// To change the value of greeting we can use window object.

(function(global,name){
    var greeting = 'hello'
    global.greeting = 'hello'
    console.log(greeting+' '+ name);

}(window,personName));

console.log(greeting); // prints Hola
