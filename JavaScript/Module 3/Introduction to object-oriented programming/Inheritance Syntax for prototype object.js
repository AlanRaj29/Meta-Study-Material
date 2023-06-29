var bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};
var eagle1 = Object.create(bird);
console.log("eagle:", eagle1);
console.log("eagle has wings:", eagle1.hasWings);
console.log("eagle can fly:", eagle1.canFly);
console.log("eagle has feathers:", eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("eagle has wings:", eagle2.hasWings);
console.log("eagle can fly:", eagle2.canFly);
console.log("eagle has feathers:", eagle2.hasFeathers);

var penquin = Object.create(bird);
penquin.canFly = false;
console.log("penguin:", penquin);
console.log("penguin has feathers:", penquin.hasFeathers);
console.log("penguin can fly:", penquin.canFly);
