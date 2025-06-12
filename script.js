const decrease =document.getElementById("decreaseBtn");
const increase =document.getElementById("increaseBtn");
const reset =document.getElementById("resetBtn");
const countLable =document.getElementById("countLable");
const limit=document.getElementById("Limit")
let count=0;

increase.onclick=function(){
    if(count==10){
    limit.textContent=`Limit Exseed ${count}`
    }
    else{
        limit.textContent=''
        count++;
        countLable.textContent=count;
    }
}
decrease.onclick=function(){
     if(count==-10){
    limit.textContent=`Limit Exseed ${count}`
    }
    else{
        limit.textContent=''
    count--;
    countLable.textContent=count;
    }
}
reset.onclick=function(){
    limit.textContent=''
    count=0;
    countLable.textContent=count;
}
