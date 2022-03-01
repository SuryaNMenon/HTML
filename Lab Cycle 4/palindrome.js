const submit = document.getElementById('submit');
submit.addEventListener('click', checkPalindrome);

function checkPalindrome(){
    const userInput = Number(document.getElementById('userInput').value);
    let temp = userInput;
    let revNum = Number(0);
    while(temp>0){
        revNum = ((revNum*10) + (temp%10));
        temp = Math.floor(temp/10);
    }
    const res = document.getElementById("result");
    if(revNum == userInput){
        result.innerHTML = 'It is a Palindrome number!';
    }
    else{
        result.innerHTML = 'It is not a Palindrome number - please try again!';
    }
}