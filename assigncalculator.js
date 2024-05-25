let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(buttons=>
{
  button.addEventlistener('click',(o)=>{
    if(o.target.innerHTML=='='){
        string=eval(string);
        input.value=string;
    }

    else if(o.target.innerHTML=='AC'){
        string="";
        input.value=string;
        input.value
    }
    else if(o.target.innerHTML=='del'){

        string=string.substring(0,string.length);
        input.value=string;
    }
        
    
   else{

    string+=o.target.innerHTML;
    input.value=string;
   }
  })
  
})
