let playerScore;
let computerScore;
const scoreTable = document.createElement("table");
scoreTable.innerHTML = `
  <tr>
    <th>Player</th>
    <th>Computer</th>
  </tr>
  <tr>
    <td id="playerScore">0</td>
    <td id="computerScore">0</td>
  </tr>
  `;
const playButton = document.querySelector("#play");
playButton.addEventListener("click", () => {
  startGame();
});

const roundText = document.createElement("div");
roundText.setAttribute("id", "round-text");
const content = document.querySelector("#content");
function startGame() {
  playerScore = 0;
  computerScore = 0;
  createScene();
  updateScore();
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", playRound);
  });
}
function updateScore() {
  scoreTable.querySelector("#playerScore").innerText = playerScore;
  scoreTable.querySelector("#computerScore").innerText = computerScore;
}
function createScene() {
  const buttons = document.querySelector("#buttons")
  let rockButton = document.createElement("button")
  rockButton.setAttribute("id", "rock");
  rockButton.innerText = "Rock";
  buttons.replaceChildren(rockButton)
  let paperButton = document.createElement("button")
  paperButton.setAttribute("id", "paper");
  paperButton.innerText = "Paper";
  buttons.appendChild(paperButton)
  let scissorsButton = document.createElement("button")
  scissorsButton.setAttribute("id", "scissors");
  scissorsButton.innerText = "Scissors";
  buttons.appendChild(scissorsButton);
  content.replaceChildren(buttons);
  content.appendChild(scoreTable);
}

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

function playRound() {
  const playerSelection = this.getAttribute("id");
  const computerSelection = getComputerChoice();
  console.log(`${playerSelection} vs ${computerSelection}`)
  if (playerSelection === computerSelection) {
    roundText.innerText = `It's a draw`
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore += 1;
        roundText.innerText = `You lost, ${playerSelection} is beaten by ${computerSelection}`
      } else {
        playerScore += 1;
        roundText.innerText = `You won, ${playerSelection} beats ${computerSelection}`
      }
    }

    if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        playerScore += 1;
        roundText.innerText = `You won, ${playerSelection} beats ${computerSelection}`
      } else {
        computerScore += 1;
        roundText.innerText = `You lost, ${playerSelection} is beaten by ${computerSelection}`
      }
    }

    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore += 1;
        roundText.innerText = `You lost, ${playerSelection} is beaten by ${computerSelection}`
      } else {
        roundText.innerText = `You won, ${playerSelection} beats ${computerSelection}`
        playerScore += 1;
      }
    }
  }
  scoreTable.before(roundText);
  updateScore();
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  let winText = document.createElement("h1")
  if (playerScore === 5) {
    winText.innerText = "You won :)"
  }
  else if (computerScore === 5) {
    winText.innerText = "You lost :("
  }
  winText.innerText += `\n(${playerScore} to ${computerScore})`
  const buttons = document.querySelector("#buttons");
  let replayButton = document.createElement("button")
  replayButton.setAttribute("id", "play");
  replayButton.innerText = "Again ?";
  replayButton.addEventListener("click", () => {
    startGame();
  })
  buttons.replaceChildren(replayButton);
  const content = document.querySelector("#content");
  content.replaceChildren(winText, buttons);
}
