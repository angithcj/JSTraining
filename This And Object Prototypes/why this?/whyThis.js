function identify(){
  return this.name.toUpperCase();
}

function speak(){
  console.log("it's "+identify.call(this));
  console.log("____________________________");
}
var me={
  name:"tony"
};
var you={
  name:"bruce"
};

speak.call(me);
speak.call(you);

//Call site and call stack

/*
call site: the location in code where a function is called
call stack:the stack of functions that have been called to get us to the current moment in execution
*/


function a(){
// call stack: a->
b(); //call site
}

function b(){
// call stack: a->b->
c();//call site
}
function c(){
// call stack: a->b->c
  console.log("hello");
}
a();//call site



//ruls
// 1.Default binding rule
//on standalone function invocation
// default catch all rule
var aa=2;
function foo(){
  console.log(this.aa);
}
foo();
//If strict mode is in effect, the global object is not eligible for the default binding


// 2.implicit binding
var obj={
  a:2,
  baa:function baa(){
    console.log(this.a);
  }
}

function haa() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	haa: haa
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.haa(); // prints 42
//Only the top/last level of an object property reference chain matters to the call-site. For instance


// 3.explicite binding

function dofoo(){
  console.log(this.b);
}

var obj3={
  b:'this is explicit binding '
}

dofoo.call(obj3);


// 4.Hard binding

function hardBinding(){
  console.log(this.c);
}

var obj4={
  c:'hard binding'
}

var hard= function(){
  hardBinding.call(obj4);
}

hard();
//setTimeout(hard,1000);

// 5. new binding

function newBinding(a) {
	this.a = a;
}

var newBind = new newBinding( 2 ); //constructed a new object and set that new object as the this for the call
console.log( newBind.a );
