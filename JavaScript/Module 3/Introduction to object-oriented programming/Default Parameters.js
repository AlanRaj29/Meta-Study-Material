//1)A useful a ES6 feature allows me to set a default parameter inside a function definition 
    // function declaration without default parameters set:


// function noDefaultParams(number){
//     console.log("Result", number * number)
// }
// noDefaultParams()

//2)Consider now, the following improvement, using default parameters:


// function noDefaultParams(number =){
//     console.log("Result", number * number)
// }
//  noDefaultParams()


//3)

/*This example might highlight the reason sometimes weird error messages appear when some software is used - perhaps the developers just didn't have enough time to build it better.*/


// class NoDefaultParams {
//     constructor(num1, num2, num3, string1, bool1) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.string1 = string1;
//         this.bool1 = bool1;
//     }
//     calculate() {
//         if(this.bool1) {
//             console.log(this.string1, this.num1 + this.num2 + this.num3);
//             return;
//         }
//         return "The value of bool1 is incorrect"
//     }
// }
// var fail = new NoDefaultParams(1,2,3,false);
// fail.calculate(); // 'The value of bool1 is incorrect'

//4)Main code

class withDefaultParams{
    constructor(num1 = 1, num2 = 5, num3 = 10, string1 = "Result:", bool1 = true){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1,this.num1 + this.num2 + this.num3);
            return ;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new withDefaultParams()
better.calculate();