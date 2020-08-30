let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", () => { game('rock');});
document.getElementById("paper").addEventListener("click", () => { game('paper');});
document.getElementById("scissors").addEventListener("click", () => { game('scissors');});


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

function game(playerPick){

        let result = playRound(playerPick,computerPlay());
        if(result == "You win!"){
            alert("Win!");
            playerScore++
        }else if(result == "You lose!"){
            alert("Loss!");
            computerScore++
        }else if(result == "It\'s a tie!"){
            alert("Tie!");
            console.log(playerScore);
            console.log(computerScore);
        }else{
            alert("error");
        }
        document.getElementById("playerScore").value = playerScore;
        document.getElementById("computerScore").value = computerScore;

}
