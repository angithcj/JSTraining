function Vehicle(){
  console.log(this);
}

Vehicle.prototype.drive = function() {
	//this.ignition();
  console.log(this);
	console.log( "Steering and moving forward!" );
};

function Car(){


  var car = new Vehicle();
  car.wheels=4;
  var vehDrive= car.drive;

  car.drive = function() {
    console.log(this);
    vehDrive.call( this );
		console.log( "Rolling on all " + this.wheels + " wheels!" );
	};

  return car;
}

var myCar = new Car();
myCar.drive();
