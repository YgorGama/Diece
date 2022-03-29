const randomNumber = () => {return Math.floor(Math.random() * 6) + 1}
let numberDiece1 = randomNumber();
let numberDiece2 = randomNumber();

function changeValueDice(){
    let diece1 = document.getElementById("img1").setAttribute("src", "images/dice"+numberDiece1+".png");
    let diece2 = document.getElementById("img2").setAttribute("src", "images/dice"+numberDiece2+".png");
}

function resultValidation(){
    let heading = document.querySelector("h1");
    if(numberDiece1 == numberDiece2){
        heading.innerHTML = "Draw!";
    }else if(numberDiece1 > numberDiece2){
        heading.innerHTML = "Player 1 Wins!";
    }else{
        heading.innerHTML = "Player 2 Wins!";
    }
}