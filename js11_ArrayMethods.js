console.log("Array Methods");

let arr1 = [2, 3, 4, 5, 6, 7];
console.log(arr1);

let newArray = arr1.map(function (currentItem, index, Array) {
  return currentItem * 2;
});
console.log(newArray);

let arr2 = newArray
console.log("arr2",arr2);

let newArray2 = arr2.filter(function(currentItem,index,Array){
     return currentItem < 10
})
console.log(newArray2);

let arr = ["X","Y","Z"]
let arr3 = [...arr]
arr3.push("Rushi")
console.log(arr);
console.log(arr3);

