
// safer this
function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}


var nullObject = Object.create( null );

foo.apply( nullObject, [2, 3] ); // prints a:2 b:3

var bar = foo.bind( nullObject, 2 );
bar( 3 ); // prints a:2 b:3



//indirection
//Another thing to be aware of is you can create "indirect references" to functions,

function indirection() {
	console.log( this.n );
}

var n = 2;

var e = {
  n: 3,
  indirection: indirection };

var f = {
  n: 4
};

e.indirection(); // prints 3
(f.indirection = e.indirection)(); // prints 2



//soft binding

if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this,
			curried = [].slice.call( arguments, 1 ),
			bound = function bound() {
				return fn.apply(
					(!this ||
						(typeof window !== "undefined" &&
							this === window) ||
						(typeof global !== "undefined" &&
							this === global)
					) ? obj : this,
					curried.concat.apply( curried, arguments )
				);
			};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}


function softBinding() {
   console.log("name: " + this.name);
}

var obj = { name: "obj" };
var obj2 = { name: "obj2" };
var obj3 = { name: "obj3" };

var fooOBJ = softBinding.softBind( obj );

fooOBJ(); // name: obj

obj2.softBinding = softBinding.softBind(obj);
obj2.softBinding(); // name: obj2   <---- look!!!

fooOBJ.call( obj3 ); // name: obj3   <---- look!

setTimeout( obj2.softBinding, 10 ); // name: obj   <---- falls back to soft-binding


// lexical whyThis

function lex(){
    return (a)=>{
      console.log(this.val);
    };
}

var obj4={
  val:2
}

var obj5={
  val:3
}

var lexFun = lex.call(obj4);
lexFun.call(obj5);
