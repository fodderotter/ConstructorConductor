//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age;
};
//Now create three instances of Person with data you make up

  //code here
var daniel = new Person("Daniel", 24);
var alice = new Person("Alice", 26);
var mochi = new Person("Mochi", 19);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function() {
	alert(this.name);
}