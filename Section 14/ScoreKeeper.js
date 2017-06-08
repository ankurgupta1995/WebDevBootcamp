var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Disp");
var p2Display = document.querySelector("#p2Disp");
var numGamesDisplay = document.querySelector("#numGames");
var numGamesInput = document.querySelector("#numGamesInput");
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

function reset_function() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

p1Button.addEventListener("click", function() {
	if(!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score === winningScore) {
			gameOver = true;
			p1Display.classList.add("winner");
		}
	}
});

p2Button.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score === winningScore) {
			gameOver = true;
			p2Display.classList.add("winner");
		}
	}
	
});

reset.addEventListener("click", reset_function);


numGamesInput.addEventListener("change", function(){
	numGamesDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset_function();
});
