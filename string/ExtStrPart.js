var fruit="Apple,Banana,Kiwi";

//1=>slice() slice(start,end)
//extract a part of starting and return the extracted part
console.log(fruit.slice(0,4)); //Appl
console.log(fruit.slice(4)); //e,Banana,Kiwi 
//original will not be changed 
console.log(fruit); //Apple,Banana,Kiwi
console.log(fruit.slice(5,-2)); //,Banana,Ki

//2=>substring() substring(start,end)
//similar to slice()
console.log(fruit.substring(0,4)); //Appl
//it cant accept negative index
// (if we give negative value then counting start from 0th position)
console.log(fruit.substring(5,-2)); //Apple

//3=>substr() substr(start,length)
//similar as slice()
//main difference,the second parameter is length
console.log(fruit.substr(0,4)); //Appl
console.log(fruit.substr(-4)); //Kiwi