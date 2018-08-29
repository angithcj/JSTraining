
// pass by value
var a=3;
var b;

b=a; // create another copy of a and points to that
a=2;
console.log(a); // prints 2
console.log(b); // prints 3

// pass by reference

var c = { greeting:'hello'};
var d;

d=c; // d point to c
c['greeting']='hi'; // mutate
console.log(c);
console.log(d); // both prints greeting:'hello'

function greet(obj){
  obj.greeting='hola';
}
greet(d);
console.log(c);
console.log(d); // both prints greeting:'hola'

c={ greeting:'ola'}; // sets up new memory space
console.log(c);
console.log(d);
