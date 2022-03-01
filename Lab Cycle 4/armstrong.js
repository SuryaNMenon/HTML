let input = Number(prompt("Enter number"));
let digCount = Number(0);

let temp = input;
while(temp>0){
    digCount += 1;
    temp = Math.floor(temp/10);
}

temp = input;
let tempDig;
let sum = Number(0);
while(temp>0){
    tempDig = temp%10;
    sum += Math.pow(tempDig, digCount);
    temp = Math.floor(temp/10);
}
const res = document.getElementById("result");
if(sum == input){
    res.innerHTML = 'It is an Armstrong Number';
    alert("Entered number is Narcissistic/Armstrong");
}
else{
    res.value = "It is not an Armstrong Number";
    alert("Not Narcissistic/Armstrong");
}
