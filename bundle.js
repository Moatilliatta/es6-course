'use strict';

var NewTaskCollection = function NewTaskCollection(tasks){
	if ( tasks === void 0 ) tasks = [];

	this.tasks = tasks;
};

NewTaskCollection.prototype.dump = function dump (){
	console.log(this.tasks);
};

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

var TaskCollection = function TaskCollection(task){
	if ( task === void 0 ) task = [];

	this.task = task;
};

TaskCollection.prototype.log = function log (){
	//this.task.forEach(function(task){
		
	// this.task.forEach((task) => {
	// console.log(task);
	// });
		
	this.task.forEach( function (task) { return console.log( ("4: " + task)); } );
};

var Task = function Task () {};

new TaskCollection([
	new Task, new Task, new Task
]).log();

var names = ['Sebastian', 'Regino', 'Antonio'];

names.forEach( function (name) { return console.log( ("4: " + name + " is very cool!") ); } );

// 5th VIDEO
function defaultDiscountRate(){
	return .10;
}

function applyDiscount(cost, discount) {
	if ( discount === void 0 ) discount = defaultDiscountRate();

	return cost - (cost * discount);
}

console.log('5: Discount = ' + applyDiscount(100) );

// 6th VIDEO

// function summatory(...numbers) {
// 	return numbers.reduce(function(prev, current) {
// 		return prev + current;
// 	});
// }

function summatory() {
	var numbers = [], len = arguments.length;
	while ( len-- ) numbers[ len ] = arguments[ len ];

	return numbers.reduce( function ( prev, current ) { return prev + current; } );
}

console.log( '6: Summatory: ' + summatory(1,2,3,4,5));

// 7th video

var title = 'Titulo';
var template = "\n<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>" + title + "</title>\n\t</head>\n\t<body>\n\n\t</body>\n</html>";

console.log('7: Template: ' + template);

// 8th Video

function getPerson() {
	var name = 'Nombre';
	var age = 25;

	return {
		name: name,
		age: age,
		greet: function greet() {
			return ("Hello " + (this.name) + ", are you " + (this.age) + " years old?");
		}
	};
}

console.log('8: ' + getPerson().greet() );
// console.log('8: Name= ' + getPerson().name + ' Age= ' + getPerson().age );

var femalePerson = {
	name: 'Mafalda',
	age:  99
};

var name = femalePerson.name;
var age = femalePerson.age;

console.log('8: name: ' + name + ' age: ' + age );

function getData(ref){
	var results = ref.results;
	var count = ref.count;

	console.log( ("8: Results: " + results + " Count: " + count) );
}

getData({
	name: 'Karen',
	age: 98,
	results: ['one', 'two', 'three' ],
	count: 12
});

function getPerson2(ref){
	var name = ref.name;
	var age = ref.age;

	console.log(("8: Hello " + name + ", you are " + age + " years old! keep going!"));
}

getPerson2(femalePerson);

//9th
var User = function User(name, email){
	this.name = name;
	this.email = email;
};

var prototypeAccessors = { foo: { configurable: true } };

User.register = function register (){
		var args = [], len = arguments.length;
		while ( len-- ) args[ len ] = arguments[ len ];

	return new (Function.prototype.bind.apply( User, [ null ].concat( args) ));
};

prototypeAccessors.foo.get = function () {
	return 'Foo!';
};

User.prototype.updateEmail = function updateEmail (newEmail){
	this.email = newEmail;
};

Object.defineProperties( User.prototype, prototypeAccessors );

//let user = new User('Edgar G', 'my@mail.com');
var user = User.register('Edgar G', 'my@mail.com');

//console.log('9th' + JSON.stringify(user) );
console.log('9th');
console.dir(user );

user.updateEmail('e@mail.com.mx');

//console.log('9th' + JSON.stringify(user) );
console.log('9th');
console.dir(user );
new NewTaskCollection([
	'First Line',
	'Segunda Línea',
	'3',
	'Quarta' ]).dump();


// 13 PROMISES
var getTime = function(length) {
	if ( length === void 0 ) length = 2000;

	return new Promise(function(resolve, reject) {
		console.log('Init Promise');

		setTimeout(function() {
			console.log('Time out');
		}, length);
	});
}; 

getTime().then(function () { return console.log('WELL DONE!'); });

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

var myTitle = 'Red Rising';

if( ! myTitle.includes('Blue')){
	console.log('This book does not begin with blue');
}

if(myTitle.startsWith('Red')){
	console.log('This book does start with Red');	
}

if(myTitle.endsWith('ing')){
	console.log('This book ends with ing');	
}

if(myTitle.startsWith('i',5)){
	console.log('This title has the i character at the 6th position');	
}

var str = 'lo';

console.log(str.repeat(15));
console.log((('«'.repeat(5)) + " MESSAGE " + ('«'.repeat(5))));


//15
var primeNumberList = [2,3,5,7];

console.log(
primeNumberList.includes(11)//ES7
);


console.log(
	primeNumberList.find( function (item) { return item === 11; }  )
);

var MyUser = function MyUser(name, isAdmin){
	this.name = name;
	this.isAdmin = isAdmin; 
};

var myUsersList = [
	new MyUser('Primero',false),
	new MyUser('Segundo',true),
	new MyUser('Tercero',false) ];

console.log(myUsersList.find( function (MyUser) { return MyUser.isAdmin; } ).name);

// let itemList = ['my','name','is'].entries();

// for (let itemProp of itemList) {
// 	console.log(itemProp);
// }
