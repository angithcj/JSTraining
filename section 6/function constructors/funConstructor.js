
function Student(name,sid){
    this.name=name;
    this.sid=sid;
}
Student.prototype.getDetails=function(){
  return this.name+' '+this.sid;
}
var angith=new Student('angith',7); // 'new' creates a new empty object.
//Student() calls the function and return a object and assign to angith
var ashique=new Student('ashique',10);
console.log(angith);
console.log(ashique);
console.log(angith.getDetails());
console.log(ashique.getDetails());

// built-in functional constructors
// String,Number..etc

Number.prototype.isgreaterThan=function(limit){
  return this>limit
}

var num=Number(3);
var a=num.isgreaterThan(5);
console.log(a);
