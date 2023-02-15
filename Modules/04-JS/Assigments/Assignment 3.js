const generation = {
	"-3": ["great grandfather",	"great grandmother"],
	"-2": ["grandfather","grandmother"],
	"-1":["father",	"mother"],
	"0": ["me!", "me!"],
	"1":["son",	"daughter"],
	"2"	:["grandson","granddaughter"],
	"3" :["great grandson","great granddaughter"]
}
function generation(x, y) {
	return y=="m"?generation[x][0]:generation[x][1];
}