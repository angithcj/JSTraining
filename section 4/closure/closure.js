

function greet(greeting){
    return function(name){
      console.log(greeting+' '+name); // prints hello peter
      /*
      Here variable greeting is available, becouse a execution context is closed in with
      the variables it supposed to have access.That is even though greet is poped out greeting
      will remain in memory.
      */
    }
}

var retFun=greet('hello');
retFun('peter');

//---------------

function buildFunction(){

  var arr=[];

  for(var i=0;i<3;i++){
    arr.push(function(j){
      return function(){
        console.log(j);
      }
    }(i));
  }

  return arr;

}

var fs=buildFunction();
fs[0](); 
fs[1]();
fs[2]();
