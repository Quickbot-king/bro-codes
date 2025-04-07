// const myCheckbox=document.getElementById("myCheckbox");
// const visaBtn=document.getElementById("visaBtn");
// const masterBtn=document.getElementById("masterBtn");
// const mpesa=document.getElementById("mpesa");
// const mySubmit=document.getElementById("mySubmit");
// const subResult=document.getElementById("subResult");
// const paymentResult=document.getElementById("paymentResult");


// mySubmit.onclick=function(){
//     // subResult.textContent=myCheckbox.checked ?`You're subscribed` : `You're not subsribed brudeski`;
//     // paymentResult.textContent=visaBtn.checked ? `You're paying with visa` : `Choose another payment option`;
//     // paymentResult.textContent=masterBtn.checked ? `You're using Master Card` : `What is bro`;
//     // paymentResult.textContent=mpesa.checked ? `You're paying via mpepe sindio` :`Sijui`;
//     //subscription status.
//     subResult.textContent=myCheckbox.checked ? `You're subscribed` : `you're not subscribed brudeski`;

//     // Payment method using ternary operators
//     paymentResult.textContent=visaBtn.checked ?`you're paying with Visa` : masterBtn.checked ? `You're using Master card`: mpesa.checked ? `Unalipa na tenje sindio` : `Chagua jinsi ingine ya malipo`;

// }

// let purchaseAmount=130;
// let discount=purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is $${purchaseAmount - (purchaseAmount*discount) /100}`);

for(let i=1;i<=20;i++){
    if(i==13){
        console.log("This is a fucking unlucky number brudestki")
    }else if(i>13){
        break;
    }else{
        console.log(i);
    }
}