var arr = [
  1,
  true,
  {
    name:"tony"
  },
  function(name){
    console.log("hello "+ name);
  },
  "awsome"
];

console.log(arr);
arr[3](arr[2].name);

//Arguments

function a(firstName,lastName,language){

  if(arguments.length ===0){
    console.log('arguments are empty');
  }
    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log('arg[0] : '+arguments[0]);
}
a();
a('tony'); // prints tony, undefined, undefined
a('tony','stark'); // prints tony, stark, undefined


// function Overloading

function greet(firstName, lastName, language){

  if(language==='en'){
    console.log("hello "+ firstName+ " "+lastName);
  }
  if(language==='es'){
    console.log('hola '+firstName+ " "+lastName);
  }
}

function greetEnglish(firstName, lastName){
greet(firstName,lastName,'en')
}

function greetSpanish(firstName, lastName){
greet(firstName,lastName,'es')
}

greetEnglish('bruce','wayn');
greetSpanish('bruce','wayn');
