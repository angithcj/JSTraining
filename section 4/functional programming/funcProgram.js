var num=[1,2,3];

function findSquare(num,fn){
  var arr=[];
  for(var i=0;i<num.length;i++){
      arr.push(fn(num[i]));
  }
  return arr;
}
var square=findSquare(num,function(n){
  return n*n;
});

var rslt=findSquare(num,function(n){
  return n===1;
});

console.log(num);
console.log(square);
console.log(rslt);

var checkGreatest=function(limit,item){
                return item>limit;
                  }
var greatest=findSquare(num,checkGreatest.bind(this,1));
console.log(greatest);

// simplified  methode

var checkGreatestSimplified=function(limit){
  return function(limit,item){   // return a function  in which first parameter is binded
    return item>limit;
  }.bind(this,limit);
}

var greatesSimplified=findSquare(num,checkGreatestSimplified(2)/* send returned function from checkGreatestSimplified*/);
console.log(greatesSimplified);
