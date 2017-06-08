var elem = document.querySelector("button");
var body = document.querySelector("body");
var flag = 0;
console.log(body);
console.log(elem);
elem.addEventListener("click", function(){
	if (!flag) {
		body.style.background = "pink";
	}
	else {
		body.style.background = "white";
	}
	flag = ~flag;
});