// //1)

// function listArrayItems(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]); //display the array item where the index is euqal to i
//   }
// }
// var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
// listArrayItems(colors);



// //2)

// function listArrayItems(arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         console.log(i, arr[i])
//     }
// }
// var colors = ["red","orange","yellow"];
// listArrayItems(colors);


// //3)

// function listArrayItems(arr){
//     for(var i = 0 ; i < arr.length ; i++){
//         console.log(i+1, arr[i])
//     }
// }
// var colors = ["red","orange","yellow"];
// listArrayItems(colors);


//4)


function listArrayItems(arr){
    for(var i = 0 ;i < arr.length ; i++){
        if(arr[i]=="red"){
            console.log(i*100,"tomato")
        }
        else{
            console.log(i*100,arr[i])
        }
    }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors)