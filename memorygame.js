var animalcards = document.getElementsByClassName('animalCard');
var cardbacks = document.getElementsByClassName('cardBack');
var buttons = document.getElementsByClassName('cardButton');
var grid = document.getElementsByClassName("cardContainer");
reset();
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
        card1.disabled = true;
        card2.disabled = true;
        score++;
        drawScore();
    }
};
function reset(){
    score = 0;
    
    for(let i = 0; i < animalcards.length; i++){
        animalcards[i].style.display = "none";
        cardbacks[i].style.display = "block";
        buttons[i].disabled = false;
    }
    scoreDisplay.style.color = "black";
    randomize();
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
function randomize(){
    let pos = [1,2,3,4,5,6,7,8,9,10,11,12];
    for(let i = 0;i < 12;i++){
        let rand = pos.splice([Math.floor(Math.random()* pos.length)], 1);
        console.log(rand);
        if(rand[0] == 1){
            buttons[i].style.gridArea = '1 / 1'
        }else if(rand[0] == 2){
            buttons[i].style.gridArea = '1 / 2'
        }else if(rand[0] == 3){
            buttons[i].style.gridArea = '1 / 3'
        }else if(rand[0] == 4){
            buttons[i].style.gridArea = '1 / 4'
        }else if(rand[0] == 5){
            buttons[i].style.gridArea = '2 / 1'
        }else if(rand[0] == 6){
            buttons[i].style.gridArea = '2 / 2'
        }else if(rand[0] == 7){
            buttons[i].style.gridArea = '2 / 3'
        }else if(rand[0] == 8){
            buttons[i].style.gridArea = '2 / 4'
        }else if(rand[0] == 9){
            buttons[i].style.gridArea = '3 / 1'
        }else if(rand[0] == 10){
            buttons[i].style.gridArea = '3 / 2'
        }else if(rand[0] == 11){
            buttons[i].style.gridArea = '3 / 3'
        }else if(rand[0] == 12){
            buttons[i].style.gridArea = '3 / 4'
        }
    }
};