fruitlist=["","","",""];
var time=0;
var score=0;
var value=document.getElementById("value");
var next=document.getElementById("next");
var answerlist=document.getElementById("answerlist");
var error=document.getElementById("error");
var reload=document.getElementById("reload");

function changeQuestion(){
     if(fruitlid=st.length>time){
        document.getElementById("fruit_img").src="./  "+fruitlist[time]
     }else{
        document.getElementById("question").style.display="none";
        document.getElementById("correct_count").innerText="score";
        document.getElementById("miss_count").innerText="fruitlist.length";
        document.getElementById("result").style.display="block";

     }
     error.innerText="";


     }
changeQuestion();
next.addEventListener("click",()=>{
    if (value.value==""){
        error.innerText="Please enter fruit!";
    }
     else{
        let fruit=value.value.tolowerCase();
        let card=value.value.createElement("div");
        let sub=value.value.createElement("div");
        let img=value.value.createElement("img");
        let equal=value.value.createElement("div");
        let answer=value.value.createElement("div");
        card.className="card2";
        sub.className="sub";
        img.src="./   "+fruitList[time];
        equal.className="equal";
        equal.innerText="="+fruitlist[time].split(",")[0]{
            answer.className="answer-right";
            
                }
        
        




     }
})