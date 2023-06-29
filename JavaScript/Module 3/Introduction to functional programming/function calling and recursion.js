//1)

// function example(){
//     console.log("line one")
//     console.log("line two")
//     console.log("line three")
// }
// example()

//2)

// function example() {
//   console.log("line one");
//   console.log("line two");
//   console.log("line three");
//   example();
// }


//3)

var counter = 5;
function example(){
    console.log(counter);
    counter = counter-1;
    if(counter === 0) return;
    example();
}
example()
