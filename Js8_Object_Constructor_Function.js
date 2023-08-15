console.log("Object Constructor Function");

let student1  ={
    firstName:"Rushikesh",
    lastName:"Apar",
    age:26,
    class: 12
}

console.log(student1);

// like this if we want to make multiple obj then we have to write multiple obj that's why  Object Constructor Function came .

function student(first,last,age,clas){
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.class = clas
}


student2 = new student("Rahul","Kumar",20,8)
console.log(student2);

student2 = new student("jeet","Dank",25,4)
student3 = new student("pratik","jadhav",18,1)
student4 = new student("jayash","lahare",28,15)

console.log(student1,student2,student3,student4);

student1.name = function(){
    return this.firstName +" "+ this.lastName
} 

console.log(student1.name());