//1)For Loop

// for(var i = 1 ; i<=5 ;i++){
//     console.log(i)
// }
// console.log("Counting completed!")


// //2)

// for(var i = 5;i > 0;i--){
//     console.log(i)
// }
// console.log("Countdown finished!")




// //1)While Loop

// var i = 1
// while(i<6){
//     console.log(i)
//     i=i+1
// }
// console.log("Counting omplete!")

// //2

// var i =5
// while(i>0){
//     console.log(i)
//     i=i-1
// }
// console.log("Countdown finished!")

// //3

// var i=2018
// while(i<=2022){
//     console.log(i)
//     i=i+1
// }




//3)Nested Loop


//1)

for(var i = 1;i<=2;i++){
    for(var j = 1;j<6;j++){
        console.log("Week",i,"Day",j)
    }
}


//2)

for(var i = 1;i <= 5 ;i++){
    for(var j = 1 ; j<=10 ;j++ ){
        console.log(i,"*",j,"=",i*j)
    }
}


//3)


for(var i = 1;i <= 5 ;i++){
    for(var j = 1 ; j<=10 ;j++ ){
        console.log(j,"*",i,"=",j*i)
    }
}


//4)

for(var i = 100; i>=10; i=i-10){
    for(var j = 10; j>=5; j=j-5){
        console.log(i,"/",j,"=",i/j)
    }
}