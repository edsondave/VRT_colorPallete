
function getHexColor(r, g, b) {
	return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(num) {
	var hex = num.toString(16);
	if (hex.length == 1) {
		hex = "0" + hex;
	}
	return hex.toUpperCase();
}

function getDefaultPalette() {
	var palette = [];
	for (i = 0; i < 5; i++) {
		palette[i] = [255, 255, 255];
	}
	
	return palette;
}

function randomPalette() {
	var rgbColor = getRandomColor();
	var hslColor = rgbToHsl(rgbColor[0], rgbColor[1], rgbColor[2]);
	var palette = [];
	
	for (i = 0; i < 5; i++) {
		var hue = ((hslColor[0] * 100 + 20 * i) % 100) / 100;
		rgbColor = hslToRgb(hue, hslColor[1], hslColor[2]);
		palette[i] = [Math.floor(rgbColor[0]), Math.floor(rgbColor[1]), Math.floor(rgbColor[2])];
	}
	
	return palette;
}

function getRandomColor() {
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255)
	return [r, g, b];
}

function renderColors(palette) {
	for (i = 0; i < 5; i++) {
		$("#color" + (i + 1)).css('background-color', "rgb(" + palette[i][0] + ", " + palette[i][1] + ", " + palette[i][2] + ")");
	}
}

function generateRules(palette) {
	 var css = '\n';
	 css += '.website-background{ color: ' + getHexColor(palette[0][0], palette[0][1], palette[0][2]) + ';}\n';
	 css += '\n';
	 css += '.element-text{ color: ' + getHexColor(palette[1][0], palette[1][1], palette[1][2]) + ';}\n';
	 css += '\n';
	 css += '.element-border{ border-color: ' + getHexColor(palette[2][0], palette[2][1], palette[2][2]) + ';}\n';
	 css += '\n';
	 css += '.element-background{ background-color: ' + getHexColor(palette[3][0], palette[3][1], palette[3][2]) + ';}\n';
	 css += '\n';
	 css += '.header{ color: ' + getHexColor(palette[4][0], palette[4][1], palette[4][2]) + ';}';
	 
	 $("#css-rules").html(css);
}

$("#actions > button:nth-child(1)").click(function(){
	var palette = randomPalette();
	renderColors(palette);
	generateRules(palette);
});

$("#actions > button:nth-child(2)").click(function(){
	var palette = getDefaultPalette();
	renderColors(palette);
	generateRules(palette);
});