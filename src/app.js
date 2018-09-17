//16 GENERATORS

function *numbers() {

	console.log('Begin');

	yield 1;
	yield 2;
	yield 3;
}

let numberIterator = numbers();

console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());

console.log(
	[...range(1, 5)]
);

function *range(start, end) {
	while (start <= end){
		yield start;
		start++;
	}
}

console.log(
	[...range(1,5)]
);