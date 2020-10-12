var Plane = function() {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
}

var plane = new Plane();

var clonePlane = Object.create(plane);
plane.blood = 500;
plane.attackLevel = 2;
plane.defenseLevel = 2;

console.log(plane.blood);
console.log(plane.attackLevel);
console.log(plane.defenseLevel);

// Object.create()的polifill
Object.create = Object.create || function(obj) {
  var F = function() {};
  F.prototype = obj;
  return new F();
}
