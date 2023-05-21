var num=['1','2','3','4','3'];
console.log(num);
//1--indexOf()=>return 1st index of an element
console.log(num.indexOf("3")); //(2) index no. return
console.log(num.indexOf("3",3)); //(4) index no. return
// num.indexOf(Element,findIndex) 
// findIndex means kidhr se search krana hai
console.log(num.indexOf(3)); //(-1) none is found

//2--LastIndexOf()=>return last index of an element
console.log(num.lastIndexOf("3")); //(4) index no. return
console.log(num.lastIndexOf("3",2)); //(-1) none is found

//3--includes()=>
console.log(num.includes("3")); //true
console.log(num.includes(3)); //false