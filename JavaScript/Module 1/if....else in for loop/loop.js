//if...else in for loop

for(var i = 1 ; i<=10;i++){
    if(i==1){
        console.log("Gold Medal")
    }
    else if(i == 2){
        console.log("Silver Medal")
    }
    else if(i == 3){
        console.log("Bronze Medal")
    }
    else{
        console.log(i)
    }
}


//Switch statement in for loop

for(var i = 1; i<=10 ; i++){
    switch(i){
        case 1:
            console.log("Gold")
            break;
        case 2:
            console.log("Silver")
            break;
        case 3:
            console.log("Bronze")
            break;
        default:
            console.log(i)            
    }
}