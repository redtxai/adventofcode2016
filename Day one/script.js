
/*
	0
	R2 = 0/360 2 E
	R2 = 270 2 E - 2 N
	R2 = 180 0 E - 2 N
	R2 = 90 0 
*/

var input = "L1, R3, R1, L5, L2, L5, R4, L2, R2, R2, L2, R1, L5, R3, L4, L1, L2, R3, R5, L2, R5, L1, R2, L5, R4, R2, R2, L1, L1, R1, L3, L1, R1, L3, R5, R3, R3, L4, R4, L2, L4, R1, R1, L193, R2, L1, R54, R1, L1, R71, L4, R3, R191, R3, R2, L4, R3, R2, L2, L4, L5, R4, R1, L2, L2, L3, L2, L1, R4, R1, R5, R3, L5, R3, R4, L2, R3, L1, L3, L3, L5, L1, L3, L3, L1, R3, L3, L2, R1, L3, L1, R5, R4, R3, R2, R3, L1, L2, R4, L3, R1, L1, L1, R5, R2, R4, R5, L1, L1, R1, L2, L4, R3, L1, L3, R5, R4, R3, R3, L2, R2, L1, R4, R2, L3, L4, L2, R2, R2, L4, R3, R5, L2, R2, R4, R5, L2, L3, L2, R5, L4, L2, R3, L5, R2, L1, R1, R3, R3, L5, L2, L2, R5";
var angle = 0;

var e = 0;
var n = 0;

var markGrid = new Array(700);

var a = 0;
for (a = 0; a <= 699; a++) {
	 markGrid[a] = new Array(700);
}


var arrayInput = input.split(", ");
var control = 0;
var xf = 0;
var yf = 0;

for (var i = 0; i <= (arrayInput.length-1) ; i++) {
	var letter = arrayInput[i].charAt(0);
	var value = parseInt(arrayInput[i].substr(1));
	
	if (i == 0) {
		if (letter == "R") {
			angle = 0;
		} else {
			angle = 90;
		}
	} else {
		if (letter == "R") {
			angle -= 90;
		} else {
			angle += 90;
		}
	}
	
	if (angle < 0) {
		angle += 360;
	}
	
	if (angle > 360) {
		angle -= 360;
	}
	
	switch (angle) {
		case 0:
		case 360:
			if (control == 0) {
				setInGrid0(e+200, n+200, e+value+200, n+200);
			}
			e += value;
		break;
		case 90:
			if (control == 0) {
				setInGrid90(e+200, n+200, e+200, n+value+200);
			}
			n += value;
		break;
		case 180:
			if (control == 0) {
				setInGrid180(e-value+200, n+200, e+200, n+200);
			}
			e -= value;
		break;
		case 270:
			if (control == 0) {
				setInGrid270(e+200, n+200, e+200, n-value+200);
			}
			n -= value;
		break;
		default:;
			console.log("ERROERROERROERROERROERROERROERROERROERROERROERROERROERROERROERROERROERRO");
			console.log("angle" + angle);
			console.log("letter" + letter);
			console.log("value" + value);
			console.log("ERROERROERROERROERROERROERROERROERROERROERROERROERROERROERROERROERROERRO");
		break;
	}
	
	console.log("angle" + angle);
	console.log("letter" + letter);
	console.log("value" + value);
}

console.log("Easter Bunny HQ is at " + (e + n) + " blocks away.");
console.log("First location that you visit twice is " + (xf + yf) + " blocks away.");



function setInGrid0(xo, yo, x, y) {
	
	for (var i = yo; i <= y; i++) {
		for (var j = xo+1; j <= x; j++) {
			if (markGrid[i][j] == 1) {
				xf= (j-200);
				yf = (i-200);
				control = 1;
			} else {
				markGrid[i][j] = 1
			}
		}
	}
}

function setInGrid90(xo, yo, x, y) {
	
	for (var i = yo+1; i <= y; i++) {
		for (var j = xo; j <= x; j++) {
			if (markGrid[i][j] == 1) {
				xf = (j-200);
				yf = (i-200);
				control = 1;
			} else {
				markGrid[i][j] = 1
			}
		}
	}
}

function setInGrid180(xo, yo, x, y) {
	
	for (var i = yo; i <= y; i++) {
		for (var j = xo-1; j > x; j--) {
			if (markGrid[i][j] == 1) {
				xf = (j-200);
				yf = (i-200);
				control = 1;
			} else {
				markGrid[i][j] = 1
			}
		}
	}
}

function setInGrid270(xo, yo, x, y) {
	
	for (var i = yo-1; i > y; i--) {
		for (var j = xo; j <= x; j++) {
			if (markGrid[i][j] == 1) {
				xf = (j-200);
				yf = (i-200);
				control = 1;
			} else {
				markGrid[i][j] = 1
			}
		}
	}
}