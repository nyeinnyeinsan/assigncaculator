let guess=document.getElementById("text");
let btn=document.getElementById("btn");
let result=document.getElementById("result");
let x = Math.floor(Math.random()*10);
btn.addEventListener("click"+showtext);
function showtext(){
    if(x<guess.value){

        result.innerHTML="Your number is greater than ramdom number";
    }
    if(x<guess.value){
        result.innerHTML="Your number is less than random number";

    }
    else{
        result.innerHTML="Equal to random number";
    }

}

