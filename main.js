const myText=document.getElementById("myText");
const mySubmit=document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");
let age;

mySubmit.onclick=function(){
    age=myText.value;
    age=Number(age)
if (age>=100){
    resultElement.textContent=`You are too old to do this ,sir`;
}else if(age==0){
    resultElement.textContent=`You can't enter,you was just born`;
}else if(age>=18){
    resultElement.textContent=`you are old enough to drive`;
}else if(age<0){
    resultElement.textContent=`You can't have a negative age and want to drive`;
}else{
    resultElement.textContent=`You must be 18+ to enter this site`;

}}