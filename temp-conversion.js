const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;




function convert(){
if(toFahrenheit.checked){
    temp=Number(textBox.value)
    temp=temp*9/5+32
    result.textContent=temp.toFixed(1) + " ℉"

}else if(toCelsius.checked){
    temp=Number(textBox.value)
    temp=(temp-32)* 5/9
    result.textContent=temp.toFixed(1) + " ℃"
}
else{
    result.textContent=`Select a unit nigga`
}
}
let numbers=[6,5,8,1,2,12,17]
numbers.sort((a,b)=> b- a);
for(let number of numbers){
    console.log(number)
}
for(let i=10;i>0;i--){
    console.log(i);
}
console.log("Happy new year")