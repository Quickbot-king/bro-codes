const myLabel=document.getElementById("myLabel");
const increaseBtn=document.getElementById("increaseBtn");
const resetBtn=document.getElementById("resetBtn");
const decreaseBtn=document.getElementById("decreaseBtn");

let count=0;

increaseBtn.onclick= function(){
     count++;
     myLabel.textContent=count;
}
resetBtn.onclick=function(){
    count=0;
    myLabel.textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    myLabel.textContent=count;

}