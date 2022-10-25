var animalcards = document.getElementsByClassName('animalCard');
var cardbacks = document.getElementsByClassName('cardBack');
for(let i = 0; i < animalcards.length; i++){
    animalcards[i].style.display = "none";
}
var temparray = [];
var i = 0;
var score = 0;
function showCard(card){
        cardID = card.children[0];
        cardID = cardID.id;
        console.log(cardID);
        card.querySelector('.animalCard').style.display = "block";
        card.querySelector('.cardBack').style.display = "none";
        temparray.push(card);
        i++;
        turncheck();
};
function turncheck(){
    if(i == 2){
        isMatch(temparray[0],temparray[1]);
        temparray = [];
        i = 0;
        console.log('proc');
    }
};

function isMatch(card1, card2){
    let card1Classes = card1.children[0].classList;
    let card2Classes = card2.children[0].classList;
    if (card1Classes[1] != card2Classes[1]){
        setTimeout(() => card1.querySelector('.animalCard').style.display = "none", 1000);
        setTimeout(() => card1.querySelector('.cardBack').style.display = "block", 1000);
        setTimeout(() => card2.querySelector('.animalCard').style.display = "none", 1000);
        setTimeout(() => card2.querySelector('.cardBack').style.display = "block", 1000);
        console.log('no match');
    }
    else{
        console.log('match');
        score++;
        drawScore();
    }
};
function reset(){
    score = 0;
    for(let i = 0; i < animalcards.length; i++){
        animalcards[i].style.display = "none";
        cardbacks[i].style.display = "block";
    }
    scoreDisplay.style.color = "black";
    drawScore();
};
function drawScore(){
    scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.innerHTML = score;
    if(score == 6){
        scoreDisplay.innerHTML = "You Win!";
        scoreDisplay.style.color = "blue";
    }
};