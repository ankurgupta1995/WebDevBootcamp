var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

	setupModeButtons();
	setupSquares();
	colorDisplay.textContent = pickedColor;
	resetButton.addEventListener("click", function() {
		reset();
	});
	reset();
}


function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of square,
			var clickedColor = this.style.backgroundColor;
			//compare to picked color
			if(clickedColor === pickedColor) {
				msgDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				msgDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	resetButton.textContent = "New Colors";
	msgDisplay.textContent = "";
}


function changeColors(color) {
	for(var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generateRandomColors(num) {
	//make array
	var array = [];
	//add num random colors
	for(var i = 0; i < num; i++) {
		//get random color and push to array
		array.push(randomColor());
	}
	//return
	return array;
}

function randomColor() {
	//pick a red between 0-255
	var red = Math.floor(Math.random() * 256);
	//pick a green
	var green = Math.floor(Math.random() * 256);
	//pick a blue
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";
}