let answer1 = document.querySelector('.answer-one');
let answer2 = document.querySelector('.answer-two');
let answer3 = document.querySelector('.answer-three');
let answer = 0;

document.querySelector('.cal').addEventListener('click', generator());
function generator(){
    //made four ordinary nums 
    // thwo nums for calculation and two nums as wrong answers
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);
    let wrongAnswer1 = Math.floor(Math.random() * 100);
    let wrongAnswer2 = Math.floor(Math.random() * 101);

    answer = num1 * num2;


    document.querySelector('.num-one').innerHTML = num1;
    document.querySelector('.num-two').innerHTML = num2;

// generating 3 different nums between 0 to 2 (the arrey length)
    let numgenerator1 = Math.floor(Math.random() * (2+1));
    let numgenerator2 = Math.floor(Math.random() * (2+1));
    let numgenerator3 = Math.floor(Math.random() * (2+1));
    let arrey = [answer1, answer2, answer3]
    
    // answers placement
    arrey[numgenerator1].innerHTML = answer;
    if (answer1.innerHTML == answer){
        answer2.innerHTML = wrongAnswer1;
        answer3.innerHTML = wrongAnswer2;
    }else if (answer2.innerHTML == answer){
        answer1.innerHTML = wrongAnswer1;
        answer3.innerHTML = wrongAnswer2;
    }else if (answer3.innerHTML == answer){
        answer1.innerHTML = wrongAnswer1;
        answer2.innerHTML = wrongAnswer2;
    };
};



answer1.addEventListener('click',() => {
    if (answer1.innerHTML == answer){
        generator();
    } else{
        alert('wrong answer');
    };
});
answer2.addEventListener('click',() => {
    if (answer2.innerHTML == answer){
        generator();
    } else{
        alert('wrong answer');
    };
});
answer3.addEventListener('click',() => {
    if (answer3.innerHTML == answer){
        generator();
    } else{
        alert('wrong answer')
    };
});
