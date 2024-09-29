function getComputerChoice(number1) {
  if (number1 > 0.66) {
    return "scissors";
  } else if (number1 > 0.33 && number1 < 0.66) {
    return "rock";
  } else number1 < 0.33;
  return "paper";
}

function getHumanChoice() {
  var choice = prompt("What is your choice?");
  return choice;
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "rock") {
      return "it's a tie";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore = computerScore + 1;
      return "You lost, paper beats rock";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore = humanScore + 1;
      return "You won, scissors beats rock";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      return "It's a tie";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore = humanScore + 1;
      return "You won, paper beats rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore = computerScore + 1;
      return "You lost, scissors beats paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore = computerScore + 1;
      return "you lost, rock beaths scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore = humanScore + 1;
      return "you won, scissors beats paper";
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      return "it's a tie";
    } else {
      return "null";
    }
  }
  function counter() {
    if (humanScore === 5) {
      computerScore = 0;
      humanScore = 0;
      console.log("Congrats, You won!");
      playGame();
    } else if (computerScore === 5) {
      computerScore = 0;
      humanScore = 0;
      console.log("Uh oh! You lost");
      playGame();
    } else {
      console.log(
        playRound(getHumanChoice(), getComputerChoice(Math.random()))
      );
      console.log("Your score is:" + humanScore);
      console.log("The computer score is:" + computerScore);
    }
  }
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
  counter();
}

playGame();
