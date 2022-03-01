const submit = document.getElementById("submit");
let userInput = [];
let submitCount = Number(0);
let max1 = -50;
let max2 = -100;
submit.addEventListener('click', checkLargest);


function checkLargest(){
    res.innerHTML = '';
    let input = Number(document.getElementById("userInput").value);
    let res = document.getElementById("result");
    for(let iter of userInput){
        if(Number(iter) == Number(input)){
            res.innerHTML = 'Duplicate number detected - discarded.'
            return;
        }
    }
    submitCount+=1;
    userInput.push(input);

    if(input>max1){
        max1 = input;
    }
    for(let iter of userInput){
        if(iter > max2 && iter != max1){
            max2 = input
        }
    }

    console.log(userInput, max1, max2);

    if(submitCount == 10){
        res.innerHTML = `Largest number is ${max1} and second largest number is ${max2}`
        userInput = [];
        submitCount = 0;
        max1 = -50;
        max2 = -100;
    }
}