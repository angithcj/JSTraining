
// scope of this varable

function a(){
  console.log(this); // prints window object
}

var b= function(){
  console.log(this); // prints window object
}

a();
b();

var c = {
  name:'tony',
  log: function(){
    this.name='angith' // name updated as angith
    var self=this;
    console.log(this); // prints object c

      function setName(newName){
        this.name=newName; // not updated.Use self to get object of c
        console.log(this); // prints window object
      }
      setName('bruce');

  }
}

c.log();
