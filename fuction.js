 var num1="3";
 var num2="3";

 function sum(num1,num2){
    console.log(num1+num2);

}
function sub(num1,num2){
    return num1-num2;

}
function mul(num1,num2){
    return num1*num2;

}

function calculate(num1,num2,callback){
 return callback(num1,num2);
}
var result=calculate(num1,num2,sub);
console.log(result);
var result=calculate(num1,num2,sum);
console.log(result);
var result=calculate(num1,num2,mul);
console.log(result);