function add () {
	let total = 0;
	for(i=0; i<arguments.length; i++){
		total += arguments[i];
	}
	return total;
}

function subtract () {
	let total = arguments[0];
	for(i=1; i<arguments.length; i++){
		total -= arguments[i];
	}
	return total;
}

function sum () {
	let total = 0;
	for(i=0; i<arguments.length; i++){
		for(x=0; x<arguments[i].length; x++)
		total += arguments[i][x];
	}
	return total;
}

function multiply () {
	let total = 1;
	for(i=0; i<arguments.length; i++){
		for(x=0; x<arguments[i].length; x++)
		total *= arguments[i][x];
	}
	return total;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	total = 1;
	for(i=1; i<=a; i++){
		total*=i;
	}
	return total;
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}