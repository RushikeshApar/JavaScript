console.log("Object");

let student1 = {
  firstName: "Rushikesh",
  lastName: "Apar",
  age: 26,
  class: 12,
};

console.log(" this is a noraml obj :", student1);
//this is a noraml obj

// like this if we want to make multiple obj then we have to write multiple obj that's why  Object Constructor Function came .

console.log("Object Constructor Function & prototype");
function student(first, last, age, clas) {
  (this.firstName = first),
    (this.lastName = last),
    (this.age = age),
    (this.class = clas);
  this.name = function () {
    return this.firstName + " " + this.lastName;
  };
}
student1 = new student("Tanvika", "Raut", 25, 4);
student2 = new student("jeet", "Dank", 25, 4);
student3 = new student("pratik", "jadhav", 18, 1);
student4 = new student("Anna", "Apar", 28, 15);

console.log(student1, student2, student3, student4);

console.log("Adding function in Constructor function :", student1.name());

// prtotype is used for when we want to add new properties in all object at a time
student.prototype.nationality = "INDIAN";

student.prototype.Fullname = function () {
  return this.firstName + " " + this.lastName;
};
console.log("Adding function by Ptotoype  :", student4.Fullname());
