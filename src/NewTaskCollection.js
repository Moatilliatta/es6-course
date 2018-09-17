class NewTaskCollection {
	constructor(tasks = []){
		this.tasks = tasks;
	}

	dump(){
		console.log(this.tasks);
	}
}

export default NewTaskCollection;