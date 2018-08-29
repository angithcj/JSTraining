
// json
var jVar={
  name:'tony',
  lName:'stark'
}

var jsonString=JSON.stringify(jVar); // converting the json to a string
console.log(jsonString);

var jString='{ "name":"tony", "lName":"stark"}';
console.log(JSON.parse(jString));

// functions

/*
Everything we can do with other variables, we can do with functions
They are special types of Objects.
*/

function greet(){
  console.log("hi");
}

greet.language= "english";
console.log(greet.language);

// function expression

//anonymousGreet(); // prints error.Engine does not know a function is assigned to anonymousGreet

var anonymousGreet = function(){
  console.log("hi");
}

anonymousGreet(); //prints hi

// passing function to a function

function log(a){
  a();
}
log(function(){
  console.log("hello")
})
