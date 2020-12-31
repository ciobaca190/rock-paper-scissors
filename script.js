const buttons = document.querySelectorAll("#player button");
const results = document.querySelector("#results");
const rounds = 5;

let score = document.querySelector("#score");
let playerScore = 0;
let computerScore = 0;

function isEqual(str1, str2) {
	return str1.toUpperCase() === str2.toUpperCase();
}

function computerPlay() {
	const selections = ["Rock", "Paper", "Scissors"];
	return selections[Math.floor(Math.random() * selections.length)];
}

function playRound(playerSelection) {
	const computerSelection = computerPlay();
	if (isEqual(playerSelection, computerSelection)) {
		return "Tie!";
	} else {
		if (isEqual(playerSelection, "rock")) {
			if(isEqual(computerSelection, "scissors")) return "You Won! Rock beats Scissors";
			else return "You Lose! Paper beats Rock";
		} else if (isEqual(playerSelection, "paper")) {
			if (isEqual(computerSelection, "rock")) return "You Won! Paper beats Rock";
			else return "You Lose! Scissors beats Paper";
		} else {
			if (isEqual(computerSelection, "paper")) return "You Won! Scissors beats Paper";
			else return "You Lose! Rock beats Scissors";
		}
	}
}

function updateScore() {
	score.textContent = `Score: ${playerScore}-${computerScore}`;
}

function handleButton(event) {
	let para = document.createElement("p");
	let roundResult = playRound(event.target.textContent);
	para.textContent = roundResult;
	results.appendChild(para);

	if(roundResult.indexOf("Won!") !== -1) playerScore++;
	else if(roundResult.indexOf("Lose!") !== -1) computerScore++;
	updateScore();

	if(playerScore === rounds) {
		playerScore = 0;
		computerScore = 0;

		results.innerHTML = "<h2 id='score'>Score: 0-0</h2>";
		score = document.querySelector("#score");

		roundResult = "Congratulations! You won the game.";
		para.textContent = roundResult;
		results.appendChild(para);
	}

	else if(computerScore === rounds) {
		playerScore = 0;
		computerScore = 0;

		results.innerHTML = "<h2 id='score'>Score: 0-0</h2>";
		score = document.querySelector("#score");

		roundResult = "You lost! The computer beat you.";
		para.textContent = roundResult;
		results.appendChild(para);
	}
}

buttons.forEach( button => {
	button.addEventListener("click", handleButton);
});