
var student={
  name:"default",
  std:"default",
  getDetails:function(){
    console.log(this.name+' learns in '+ this.std+'th std.');
  }
}


var peter={
  name:"peter",
  std:"IX"
}

// not be used in coding

peter.__proto__=student;
peter.getDetails();


// var a={};
// var b=function(){
//
// }
// var c=[];


for(var prop in peter){
  console.log(prop+':'+peter[prop]);
}

var bruce={
  getDetails:function(){
    return 'bruce is hulk';
  }
}

_.extend(peter,bruce); // combine the properties of bruce to john
console.log(peter);
