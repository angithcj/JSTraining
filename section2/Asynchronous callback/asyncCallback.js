
function waiteThreeSeconds(){
  var time=3000+ new Date().getTime();
  while(new Date() < time){}
  console.log('finished Function'); // printed first
}

function clickHandler(){
  console.log('click event');
  /*
  prined last.Because event queue is only executed when execution context is empty 
  */

}

document.addEventListener('click',clickHandler);

waiteThreeSeconds();
console.log('finished execution'); // printed second
