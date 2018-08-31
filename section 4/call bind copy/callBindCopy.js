var test={
  name:"tony",
  lastName:"stark",
  getName: function(){
    var name=this.name +' '+ this.lastName;
    return name;
  }
}

var logName=function(hero){
  console.log(this.getName()+" is "+ hero);
  console.log("------------------------")
};

var loggedPersonName = logName.bind(test);
loggedPersonName();
/* bind function makes a copy of function and pass object test.So it replace this keyword with test
  bind only creates copy.Does not execute
*/

logName.call(test,"iron man");

/*
call function execute the function.object is passed as the first parameter.
*/

logName.apply(test,["iron man"]);
/*
only difference between call and apply is apply pass arguments as array instead normal list
*/

//IIFE

(function(hero){
  console.log(this.getName()+" is "+ hero);
  console.log("------------------------")
}).apply(test,["an avenger"]);

//..............................................

// finction borrowing

var test2={
  name:"tony",
  lastName:"stark"
}

console.log(test.getName.apply(test2));// apply function borrow function for simiar objects


// function currying

function fullName(fName,lName){
  console.log(fName + ' ' + lName);
}

var getFullName = fullName.bind(this,'angith'); // the first parameter always be angith
getFullName("Jayan");
