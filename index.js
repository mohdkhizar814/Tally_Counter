document.getElementsByClassName("buttons")[0].addEventListener("click",function(){
    let st=document.getElementById("counter").innerHTML;
    let no=parseInt(st);
    no=no-1;
    document.getElementById("counter").innerHTML=no;
});

document.getElementsByClassName("buttons")[1].addEventListener("click",function(){
    let st=document.getElementById("counter").innerHTML;
    let no=parseInt(st);
    no=no+1;
    document.getElementById("counter").innerHTML=no;
    changeColor();
    changeBody(no);
});

document.querySelector(".btn").addEventListener("click",function(){
    document.getElementById("counter").style.color = "#31c48d";
    document.querySelector("body").style.backgroundColor="#000000";
    document.querySelector("body").style.color="#000000";

    document.getElementById("counter").innerHTML=0;
  
});

function changeColor(){
    let n=Math.random();
    n=n*10;
    n=Math.floor(n+1);
   
    switch (n){
        case 1:
        document.getElementById("counter").style.color = "#B3F";
        document.querySelector("body").style.backgroundColor="#B3F";
        break;

        case 2:
        document.getElementById("counter").style.color = "#B3FFAE";
        document.querySelector("body").style.backgroundColor="#B3FFAE";
        break;

        case 3:
        document.getElementById("counter").style.color = "#FF6464";
        document.querySelector("body").style.backgroundColor="#FF6464";
        break;

        case 4:
        document.getElementById("counter").style.color = "#2146C7";
        document.querySelector("body").style.backgroundColor="#2146C7";
        break;

        case 5:
        document.getElementById("counter").style.color = "#00ABB3";
        document.querySelector("body").style.backgroundColor="#00ABB3";
        break;

        case 6:
        document.getElementById("counter").style.color = "#98A8F8";
        document.querySelector("body").style.backgroundColor="#98A8F8";
        break;

        case 7:
        document.getElementById("counter").style.color = "#256D85";
        document.querySelector("body").style.backgroundColor="#256D85";
        break;

        case 8:
        document.getElementById("counter").style.color = "#4FA095";
        document.querySelector("body").style.backgroundColor="#4FA095";
        break;

        case 9:
        document.getElementById("counter").style.color = "#FF884B";
        document.querySelector("body").style.backgroundColor="#FF884B";
        break;

        default :
        document.getElementById("counter").style.color = "#FEDB39";
        document.querySelector("body").style.backgroundColor="#FEDB39";

    }
}

function changeBody(no){
    if(no%10===0){
        document.querySelector("body").style.color="#ffffff";
    }
    else{
        document.querySelector("body").style.color="#000000";
    }
}