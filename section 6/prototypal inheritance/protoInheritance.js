var Student={
  sid:'def',
  name:'def',
  getDetails:function(){
    return this.sid+' '+this.name;
  }
}

var bruce=Object.create(Student);
bruce.sid='7';
bruce.name='bruce wayne';
console.log(bruce);
console.log(bruce.getDetails());
