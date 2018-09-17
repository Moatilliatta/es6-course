'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NewTaskCollection = require('./NewTaskCollection');

var _NewTaskCollection2 = _interopRequireDefault(_NewTaskCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 4th VIDEO
// Force unmutuability.
//const months = Object.freeze(['January', 'February']);

var TaskCollection = function () {
	function TaskCollection() {
		var task = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		_classCallCheck(this, TaskCollection);

		this.task = task;
	}

	_createClass(TaskCollection, [{
		key: 'log',
		value: function log() {
			//this.task.forEach(function(task){

			// this.task.forEach((task) => {
			// 	console.log(task);
			// });

			this.task.forEach(function (task) {
				return console.log('4: ' + task);
			});
		}
	}]);

	return TaskCollection;
}();

var Task = function Task() {
	_classCallCheck(this, Task);
};

new TaskCollection([new Task(), new Task(), new Task()]).log();

var names = ['Sebastian', 'Regino', 'Antonio'];

names.forEach(function (name) {
	return console.log('4: ' + name + ' is very cool!');
});

// 5th VIDEO
function defaultDiscountRate() {
	return .10;
}

function applyDiscount(cost) {
	var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDiscountRate();

	return cost - cost * discount;
}

console.log('5: Discount = ' + applyDiscount(100));

// 6th VIDEO

// function summatory(...numbers) {
// 	return numbers.reduce(function(prev, current) {
// 		return prev + current;
// 	});
// }

function summatory() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	return numbers.reduce(function (prev, current) {
		return prev + current;
	});
}

console.log('6: Summatory: ' + summatory(1, 2, 3, 4, 5));

// 7th video

var title = 'Titulo';
var template = '\n<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>' + title + '</title>\n\t</head>\n\t<body>\n\n\t</body>\n</html>';

console.log('7: Template: ' + template);

// 8th Video

function getPerson() {
	var name = 'Nombre';
	var age = 25;

	return {
		name: name,
		age: age,
		greet: function greet() {
			return 'Hello ' + this.name + ', are you ' + this.age + ' years old?';
		}
	};
}

console.log('8: ' + getPerson().greet());
// console.log('8: Name= ' + getPerson().name + ' Age= ' + getPerson().age );

var femalePerson = {
	name: 'Mafalda',
	age: 99
};

var name = femalePerson.name,
    age = femalePerson.age;


console.log('8: name: ' + name + ' age: ' + age);

function getData(_ref) {
	var results = _ref.results,
	    count = _ref.count;

	console.log('8: Results: ' + results + ' Count: ' + count);
}

getData({
	name: 'Karen',
	age: 98,
	results: ['one', 'two', 'three'],
	count: 12
});

function getPerson2(_ref2) {
	var name = _ref2.name,
	    age = _ref2.age;

	console.log('8: Hello ' + name + ', you are ' + age + ' years old! keep going!');
}

getPerson2(femalePerson);

//9th

var User = function () {
	function User(name, email) {
		_classCallCheck(this, User);

		this.name = name;
		this.email = email;
	}

	_createClass(User, [{
		key: 'updateEmail',
		value: function updateEmail(newEmail) {
			this.email = newEmail;
		}
	}, {
		key: 'foo',
		get: function get() {
			return 'Foo!';
		}
	}], [{
		key: 'register',
		value: function register() {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			return new (Function.prototype.bind.apply(User, [null].concat(args)))();
		}
	}]);

	return User;
}();

//let user = new User('Edgar G', 'my@mail.com');


var user = User.register('Edgar G', 'my@mail.com');

//console.log('9th' + JSON.stringify(user) );
console.log('9th');
console.dir(user);

user.updateEmail('e@mail.com.mx');

//console.log('9th' + JSON.stringify(user) );
console.log('9th');
console.dir(user);

// 10
// Take a look on NewTaskCollection.js
// import { NewTaskCollection } from './NewTaskCollection'; // No default definition.
// import { NewTaskCollection, foo } from './NewTaskCollection'; // Multiple values.
// import NewTaskCollection { foo } from './NewTaskCollection'; // Multiple values, one default.

// Only default.
new _NewTaskCollection2.default(['First Line', 'Segunda Línea', '3', 'Quarta']).dump();