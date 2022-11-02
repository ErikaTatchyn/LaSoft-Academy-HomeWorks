let car = "audi";
let bike = "cannondale";

function log() {
  let bike = "specialized";
  car = "jeep";

  function inner() {
    let plane = "boeing";
    console.log(car); //jeep
    console.log(bike); //specialized
    console.log(plane); //boeing
  }
  console.log(inner); // function inner(){...}
  return inner;
}

console.log(car); //audi
console.log(bike); //cannodale

var logger = log();
logger();

console.log(car); //jeep
console.log(bike); //cannadole
inner(); //error
