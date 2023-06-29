// //1)

// // class Train{
// //     constructor(color,lightOn){
// //         this.color = color;
// //         this.lightOn = lightOn;

// //     }
// // }
// // new Train()
// // var myFirstTrain = new Train("red",false);
// // var mySecondTrain = new Train("blue",false)
// // var myThirdTrain = new Train("blue",true)
// // console.log(myFirstTrain)
// // console.log(mySecondTrain)
// // console.log(myThirdTrain)

// //2)
// //WE CAN ALSO ADD METHODS TO CLASS

// class Train {
//   constructor(color, lightOn) {
//     this.color = color;
//     this.lightOn = lightOn;
//   }
//   toggleLights() {
//     this.lightOn = !this.lightOn;
//   }
//   lightsStatus() {
//     console.log("Lights On?", this.lightOn);
//   }
//   getSelf() {
//     console.log(this);
//   }
//   getPrototype() {
//     var proto = Object.getPrototypeOf(this);
//     console.log(proto);
//   }
// }
// var train3 = new Train("red", false);
// train3.toggleLights();
// train3.lightsStatus();
// train3.getSelf();
// train3.getPrototype();

// //POLYMORPHISM USING CLASSES
// class HighSpeedTrain extends Train {
//   constructor(passengers, highSpeedOn, color, lightOn) {
//     super(color, lightOn);
//     this.passengers = passengers;
//     this.highSpeedOn = highSpeedOn;
//   }
//   toggleHighSpeed() {
//     this.highSpeedOn = !this.highSpeedOn;
//     console.log("High speed status:", this.highSpeedOn);
//   }
//   toggleLights() {
//     super.toggleLights();
//     super.lightsStatus();
//     console.log("Lights are 100% operational.");
//   }
// }
// var train5 = new Train("blue", false);
// var highSpeed1 = new HighSpeedTrain(200, false, "green", false);
// train5.toggleLights();
// train5.lightsStatus();
// highSpeed1.toggleLights();
// train5.getPrototype();
// highSpeed1.getPrototype();

// //3)
// //Using class instance as another class' constructor's property

class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBike = new StationaryBike(stationaryBikePos, 8);
    this.treadmill = new Treadmill(treadmillPos, 5);
  }
}

var boxingGym = new Gym("7-22", "right corner", "left corner");

console.log(boxingGym.openHrs); //
console.log(boxingGym.stationaryBike); //
console.log(boxingGym.treadmill); //
