function addtwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number");
     
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number");
    
    } else {
      console.log(a + b);
    }
    
  } catch (err) {
    
    console.log("Error!", err);
  }
}
addtwoNums(5, "5");
console.log("It Code Still Works");


// function addtwoNums(a,b){
//   try{
//     console.log(a+b);
//   }catch(err){
//     console.log(err)
//   }
// }
// addtwoNums(5,"5")