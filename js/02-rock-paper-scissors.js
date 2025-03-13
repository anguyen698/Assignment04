function getCpuRps() {
  rps = Math.round(Math.random() * 3);
  if (rps === 0) {
    return "rock";
  } else if (rps === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getUserRps() {
  const options = ["rock", "paper", "scissors"];
  let userChoice = prompt("Rock, paper, or scissors? ").toLowerCase();
  while (!options.includes(userChoice)) {
    alert("Invalid input. Please choose either rock, paper, or scissors.");
    userChoice = prompt("Rock, paper, or scissors? ").toLowerCase();
  }
  return userChoice;
}

function playRps(userChoice, cpuChoice) {
  window.console.log(`You played ${userChoice}`);
  window.console.log(`CPU played ${cpuChoice}\n`);
  if (userChoice === cpuChoice) {
    window.console.log("You tied!");
  } else if (
    (userChoice === "rock" && cpuChoice === "scissors") ||
    (userChoice === "paper" && cpuChoice === "rock") ||
    (userChoice === "scissors" && cpuChoice === "paper")
  ) {
    window.console.log("You win!");
  } else {
    window.console.log("You lose!");
  }
}

function startRpsGame() {
  let userChoice = getUserRps();
  let cpuChoice = getCpuRps();

  playRps(userChoice, cpuChoice);
}
