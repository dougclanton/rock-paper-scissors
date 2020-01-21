let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerPick(e.target.id);
  });
});

function computerPlay(){
    let computerPick = Math.floor(Math.random()*3)+1;
    if(computerPick == 1){
        return 'rock';
    }else if(computerPick == 2){
        return 'paper';
    }else{
        return 'scissors';
    }
}

function playerPick(pp){
    if(pp == 'rock'){
        return 'rock';
    }else if(pp == 'paper'){
        return 'paper';
    }else if(pp == 'scissors'){
        return 'scissors';
    }else{
        return 0;
    }
}

function playRound(playerSelection, computerSelection){
    while(playerSelection == 'rock'){
        if(computerSelection == 'rock'){
            return 'It\'s a tie!'
        }else if(computerSelection == 'scissors'){
            return 'You win!'
            playerScore++
        }else{
            return 'You lose!'
            computerScore++
        }
    }
    while(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            return 'You win!'
            playerScore++
        }else if(computerSelection == 'scissors'){
            return 'You lose!'
            computerScore++
        }else{
            return 'It\'s a tie!'
        }
    }
    while(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            return 'You lose!'
            computerScore++
        }else if(computerSelection == 'scissors'){
            return 'It\'s a tie!'
        }else{
            return 'You win!'
            playerScore++
        }
    }  
}

function game(){

    for(let gameCount = 0; gameCount<5; gameCount++){
        let result = playRound(playerPick(),computerPlay());
        if(result == "You win!"){
            alert("Win!");
            console.log(playerScore);
            console.log(computerScore);
        }else if(result == "You lose!"){
            alert("Loss!");
            console.log(playerScore);
            console.log(computerScore);
        }else if(result == "It\'s a tie!"){
            alert("Tie!");
            console.log(playerScore);
            console.log(computerScore);
        }else{
            alert("error");
        }
        document.getElementById("playerScore").value = playerScore;
        document.getElementById("playerScore").value = computerScore;
    }
}