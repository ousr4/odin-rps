function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  } 
}

function playRound(playerSelection, computerSelection) {
  console.log(`${playerSelection} vs ${computerSelection}`)
  if(playerSelection === computerSelection) {
    return null;
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return false;
    } else {
      return true;
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return true;
    } else {
      return false;
    }
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return false;
    } else {
      return true;
    }
  }
}

function game() {
  let computerPoint = 0;
  let playerPoint = 0;
  while(playerPoint !== 5 && computerPoint !== 5) {
    let playerSelection = prompt("What's your move ?").toLowerCase();
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
      alert("Invalide move!\nPlease choose between rock, paper or scissors.");
      continue;
    }
    let playerWon = playRound(playerSelection, getComputerChoice());
    if (playerWon === true) {
      playerPoint += 1;
    } else if (playerWon === false) {
      computerPoint +=1
    }
    console.log(`Player: ${playerPoint} - ${computerPoint} Computer`);
  }

  if (playerPoint === 5) {
    console.log("You Won :)")
  } else {
    console.log("You lose :(")
  }
}

game();
