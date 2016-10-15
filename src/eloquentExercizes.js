var size = 8;
var board = "";
for (i=1; i<=size; i++) {
	for (j=1; j<=size; j++) {
		if((j+i)%2 == 0){
			board = board +"#";
		} else {
			board = board + " ";
		}
	}
	board = board + "\n";
}
console.log(board);

var power = function(base,exponent){
	var result = 1;
	for(i=0; i<exponent; i++){
		result *= base;
	}
	return result;
}
console.log(power(2,32));
console.log(power(2,1000));
