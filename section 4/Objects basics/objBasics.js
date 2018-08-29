
/*
Object Member access methodes in JavaScript
*/

var person = new Object();

person["personName"]="tony";
person["lastName"]="stark";

console.log(person); // prints object and it's name value pairs
console.log(person["personName"]); //prints tony
console.log(person.personName);

person.address = new Object();
person.address.street = "baker street";
person.address.city ="london";

console.log(person.address.street);
console.log(person["address"]["city"]);

/*
  Other methodes to declare an object
*/

var user ={  // it can also be called namespace.Because it is a container for variables and functions
  "userName":"tony",
  "lastName":"stark",
  "address":{
      "street":"Baker street",
      "city":"london"
    }
}



console.log(user);
console.log(user.address.street);

// passing Object

function greet(person){
  console.log("hi "+person.personName);
}
greet(person);

greet({
  "personName":"angith",
  "lastName":"stark"
})
