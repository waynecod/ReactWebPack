// Using ES6
// Template strings
var name = "Wayne";
let thing = "party";
// Old way
//let greet = "Hi my name is \n" +
            //name + "and I like to " + 
           // thing + ".";

//ES6
let newGreet = `Hi, my name is ${name} 
and I like to ${thing}!`;

//Destructor arguments
function calcBmi({ weight: w, height: h, max = 25, callback }) {
    let bmi = w / Math.pow(h,2);
    if(bmi > max){
        console.log("You're to fat");
    }
    if (callback){
        callback(bmi);
    }
    callback({ weight, height, max:25 });
    callback({ weight, height, callback: function(){} });
}
