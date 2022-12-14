// get choice of computer in random
function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  var item = options[Math.floor(Math.random() * options.length)];
  return item;
}

// get the result of round
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return "draw";
  if (playerSelection == "Rock") {
    if (computerSelection == "Paper") return "player_loose";
    else return "player_win";
  } else if (playerSelection == "Paper") {
    if (computerSelection == "Scissors") return "player_loose";
    else return "player_win";
  } else {
    if (computerSelection == "Rock") return "player_loose";
    else return "player_win";
  }
}

// main function
function game() {
  console.log("This is the cli version of game developed by aadil mugal");

  // get the player name
  let playerName = prompt("Enyter your name");
  console.log(`Your Name : ${playerName}`);
  alert(`Welcome ${playerName} š`);

  // to store the result of scores of both player and computer
  let myScore = 0;
  let computerScore = 0;

  //   play 5 round in total
  for (let i = 0; i < 5; i++) {
    // player selection of choice
    let playerSelection = null;
    console.log(`Round ${i + 1}`);
    while (true) {
      playerSelection = prompt(
        `š Round : ${
          i + 1
        } š\nš Enter 1 for Rock\nš Enter 2 for Paper\nš Enter 3 for Scissors`
      );

      if (playerSelection > 3 || playerSelection < 0) {
        alert("Not a valid input\nInput should be between 1 to 3");
      } else {
        break;
      }
    }
    if (playerSelection == 1) playerSelection = "Rock";
    else if (playerSelection == 2) playerSelection = "Paper";
    else playerSelection = "Scissors";

    let computerSelection = getComputerChoice();

    console.log(`${playerName} choice : ${playerSelection}`);
    console.log(`Computer choice : ${computerSelection}`);

    if (playRound(playerSelection, computerSelection) == "player_win") {
      myScore++;
      console.log(`š  you win this round`);
      console.log(`${playerSelection} beats ${computerSelection}.`);
    } else if (
      playRound(playerSelection, computerSelection) == "player_loose"
    ) {
      computerScore++;
      console.log(`š· you loose this round`);
      console.log(`${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log("Round draw!!!");
    }
  }
  console.log("Here is the winner");
  if (myScore > 2) {
    console.log(`${playerName} is winnerš·š·`);
  } else if (myScore == computerScore) {
    console.log("Match draw!!!");
  } else {
    console.log(`Computer is winner\n${playerName} is looserš·š·`);
  }

  console.log("To play it again refresh the browser");
}

game();
