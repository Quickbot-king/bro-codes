// const minNum=50;
// const maxNum=100;
// const myGuess=document.getElementById("myGuess");
// const comparison=document.getElementById("comparison");
// const mySubmit=document.getElementById("mySubmit");
// const attempts=document.getElementById("attempts");
// const result=document.getElementById("result");
// const random=document.getElementById("random");
// // Generate random number

// // console.log(randomNumber)
// let attemptCount=0;


// mySubmit.onclick=function(){
// const randomNumber=Math.floor(Math.random()*(maxNum-minNum+1)+minNum);
// let guess=Number(myGuess.value);
// random.textContent= `randomNumber: ${randomNumber}`;
// // result.textContent=myGuess;
// // attempts.textContent=attempts++;
// if(isNaN(guess)){
//     result.textContent=`Please enter a valid Number`;
// }else if(guess<minNum || guess >maxNum){
//     result.textContent=`PLEASE ENTER A VALID NUMBER!`;
// }else {
// attemptCount++;
// attempts.textContent=`Attempts : ${attemptCount}`};
// // if(guess<randomNumber){
// // comparison.textContent="Too low! Try Again";
// // }else if(guess>randomNumber){
// // comparison.textContent="Too High,Maybe pick lower idk"
// // }else{
// // comparison.textContent="Yaaaaay,winner winner,chicken dinner"
// // }
// comparison.textContent=guess<randomNumber? `Too low,try again`:
// guess> randomNumber?`Too high!!Maybe pick a lower number?`:
// "Yaay,winner winner chicken dinner";
// }
function happyBirthday(userName,age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${userName}`);
    console.log("Happy birthday to you!");
    console.log(`You're ${age} years old 😎`);
    console.log("Happy birthday to you!");

}
happyBirthday("Kevin",34);
happyBirthday("Suzanne",25);
happyBirthday("Anne",28 );

function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    return x/y;
}
console.log(add(17,19));
console.log(subtract(17,19));
console.log(multiply(17,19));
console.log(divide(17,19));

function isEven(number){
    if(number % 2===0){
        console.log("Yep,you win yo");
    }else{
        console.log("odd");
    }
}isEven(34);

function isValidEmail(email){
    // if(email.includes("@")){
    //     return "valid";
    // }else{
    //     return "Invalid";
    // }
    return email.includes("@")? "This is a valid email" : "Fuck you,enter a valid email";
}
console.log(isValidEmail("kevin30gmail.com"))
