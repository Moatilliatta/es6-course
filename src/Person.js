class Person {
   constructor(name){
   	this.name = name;
   }

   greet(){
   	return 'Konichiwa, Ich bin ' + this.name; // Review template strings.
   }
}

console.log(new Person('Edogaru').greet());