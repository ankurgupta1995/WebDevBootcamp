//generating random colors
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}

//all possible sounds
var sounds = ['assets/sounds/bubbles.mp3','assets/sounds/clay.mp3','assets/sounds/confetti.mp3',
			  'assets/sounds/corona.mp3','assets/sounds/dotted-spiral.mp3','assets/sounds/flash-1.mp3',
			  'assets/sounds/flash-2.mp3','assets/sounds/flash-3.mp3','assets/sounds/glimmer.mp3','assets/sounds/moon.mp3',
			  'assets/sounds/pinwheel.mp3','assets/sounds/piston-1.mp3','assets/sounds/piston-2.mp3','assets/sounds/piston-3.mp3',
			  'assets/sounds/prism-1.mp3','assets/sounds/prism-2.mp3','assets/sounds/prism-3.mp3','assets/sounds/splits.mp3',
			  'assets/sounds/squiggle.mp3','assets/sounds/strike.mp3','assets/sounds/suspension.mp3','assets/sounds/timer.mp3',
			  'assets/sounds/ufo.mp3','assets/sounds/veil.mp3','assets/sounds/wipe.mp3','assets/sounds/zig-zag.mp3'];

//populating key data with sounds and random colors
var keyData = {};
var ascii_val = 97;
for(var i=0; i < 26; i++) {
	var music = [sounds[i]];
	var newColor = getRandomColor();
	keyData[String.fromCharCode(ascii_val)] = {
		color: newColor,
		sound: new Howl({
			src: music
		})
	};
	ascii_val += 1;
}

//making new circles on each keypress and assigning
//color and sound
var circles = [];
function onKeyDown(event) {
	if(keyData[event.key]) {
		var maxPoint = new Point(view.size.width, view.size.height);
		var randPoint = Point.random();
		var point = maxPoint * randPoint;
		var newCircle = new Path.Circle(point, 500);
		keyData[event.key].sound.play();
		newCircle.fillColor = keyData[event.key].color;
		circles.push(newCircle);
	}	
}

//animating each circle
function onFrame(event) {
	for(var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(0.9);
		if(circles[i].area < 1) {
			circles[i].remove();
			circles.splice(i, 1);
		}
	}
}