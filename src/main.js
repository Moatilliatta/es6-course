/**
 * IMPORTANT NOTE
 *
 * to use webpack execute from root
 * $ ./node_modules/.bin/webpack
 *
 * take a look on webpack.config.js to either use production or development
 * mode, the first one generates a minified file; the second one, a pretty
 * view of the JS code.
 * 
 * to use rollup with buble
 * $ rollup -c
 */

// 4th VIDEO
// Force unmutuability.
//const months = Object.freeze(['January', 'February']);

class TaskCollection {
	constructor(task = []){
		this.task = task;
	}

	log(){
		//this.task.forEach(function(task){
		
		// this.task.forEach((task) => {
		// 	console.log(task);
		// });
		
		this.task.forEach( task => console.log( `4: ${task}`) );
	}
}

class Task{

}

new TaskCollection([
	new Task, new Task, new Task
]).log();

const names = ['Sebastian', 'Regino', 'Antonio'];

names.forEach( name => console.log( `4: ${name} is very cool!` ) );

// 5th VIDEO
function defaultDiscountRate(){
	return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
	return cost - (cost * discount);
}

console.log('5: Discount = ' + applyDiscount(100) );

// 6th VIDEO

// function summatory(...numbers) {
// 	return numbers.reduce(function(prev, current) {
// 		return prev + current;
// 	});
// }

function summatory(...numbers) {
	return numbers.reduce( ( prev, current ) => prev + current );
}

console.log( '6: Summatory: ' + summatory(1,2,3,4,5));

function f(...args) {
	args.forEach( item => console.log(`6: Arguments: ${item}`) );
	// for(let item of arguments){
	// 	item => console.log(`6: Arguments: ${item}`);
	// }
}
var args = [0, 1];
f(-1, ...args, 2, ...[3]);

var parts1 = ['shoulder', 'knees'];
var parts2 = ['chest', 'waist'];
var lyrics = ['head', ...parts1, ...parts2, 'and', 'toes'];

console.log(`6: Lyrics: ${lyrics}`);

// 7th video

let title = 'Titulo';
let template = `
<!DOCTYPE html>
<html>
	<head>
		<title>${title}</title>
	</head>
	<body>

	</body>
</html>`;

console.log('7: Template: ' + template);

// 8th Video

function getPerson() {
	let name = 'Nombre';
	let age = 25;

	return {
		name,
		age,
		greet() {
			return `Hello ${this.name}, are you ${this.age} years old?`;
		}
	};
}

console.log('8: ' + getPerson().greet() );
// console.log('8: Name= ' + getPerson().name + ' Age= ' + getPerson().age );

let femalePerson = {
	name: 'Mafalda',
	age:  99
}

let { name, age } = femalePerson;

console.log('8: name: ' + name + ' age: ' + age );

function getData({results, count}){
	console.log( `8: Results: ${results} Count: ${count}` );
}

getData({
	name: 'Karen',
	age: 98,
	results: ['one', 'two', 'three' ],
	count: 12
});

function getPerson2({name, age}){
	console.log(`8: Hello ${name}, you are ${age} years old! keep going!`);
}

getPerson2(femalePerson);

//9th
class User {
	constructor(name, email){
		this.name = name;
		this.email = email;
	}

	static register(...args){
		return new User(...args);
	}

	get foo() {
		return 'Foo!';
	}

	updateEmail(newEmail){
		this.email = newEmail;
	}
}

//let user = new User('Edgar G', 'my@mail.com');
let user = User.register('Edgar G', 'my@mail.com');

//console.log('9th' + JSON.stringify(user) );
console.log('9th');
console.dir(user );

user.updateEmail('e@mail.com.mx');

//console.log('9th' + JSON.stringify(user) );
console.log('9th');
console.dir(user );

// 10
// Take a look on NewTaskCollection.js
// import { NewTaskCollection } from './NewTaskCollection'; // No default definition.
// import { NewTaskCollection, foo } from './NewTaskCollection'; // Multiple values.
// import NewTaskCollection { foo } from './NewTaskCollection'; // Multiple values, one default.

import NewTaskCollection from './NewTaskCollection'; // Only default.
new NewTaskCollection([
	'First Line',
	'Segunda Línea',
	'3',
	'Quarta',
]).dump();


// 13 PROMISES
var getTime = function(length = 2000) {
	return new Promise(function(resolve, reject) {
		console.log('13 Init Promise');

		setTimeout(function() {
			console.log('13 Time out');
		}, length);
	});
}; 

getTime().then(() => console.log('13 WELL DONE!'));

// ES7
// async function getTime(length, makeItWork = true) {
	
// 	if(makeItWork) {

// 	return await setTimeout(function() {
// 			console.log('Time out');
// 	}, length);

// 	} else {
// 		throw 'Not working rightnow!';
// 	}
// }

// try {
// 	let user = await getTime(2000);
// } catch(err) {
// 	console.error(err)
// }

//14

let myTitle = 'Red Rising';

if( ! myTitle.includes('Blue')){
	console.log('14: This book does not begin with blue');
}

if(myTitle.startsWith('Red')){
	console.log('14: This book does start with Red');	
}

if(myTitle.endsWith('ing')){
	console.log('14: This book ends with ing');	
}

if(myTitle.startsWith('i',5)){
	console.log('14: This title has the i character at the 6th position');	
}

let str = 'lo';

console.log(str.repeat(15));
console.log(`${'«'.repeat(5)} 14 MESSAGE ${'«'.repeat(5)}`);


//15
let primeNumberList = [2,3,5,7];

console.log(
primeNumberList.includes(11)//ES7
);


console.log(
	primeNumberList.find( item => item === 11  )
);

class MyUser {
	constructor(name, isAdmin){
		this.name = name;
		this.isAdmin = isAdmin; 
	}
}

let myUsersList = [
	new MyUser('Primero',false),
	new MyUser('Segundo',true),
	new MyUser('Tercero',false),
];

console.log(myUsersList.find( (MyUser) => MyUser.isAdmin ).name);

let itemList = ['Ramon','Salazar','Salvador'].entries();

for (let itemProp of itemList) {
	console.log(itemProp);
}

//17
let setList = new Set([
	'un1',
	'd2s',
	'd2s',
	'tr3s',
	'tr3s',
	'tr3s'
]);

console.log(setList);
console.log(`17: Size: ${setList.size}`);

setList.add('four');
console.log(setList);

setList.delete('d2s');
console.log(setList);

console.log(`17: Has four? ${setList.has('four')}`);

setList.forEach( item => console.log(item) );

setList.clear();
console.log(`17: All erased, size: ${setList.size}`);
setList.add('ONE');
console.log(setList);
