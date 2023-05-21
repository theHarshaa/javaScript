const array1=[1,4,9,16,25];

// map()=>return a new array containing the result
let newArray1=array1.map((current)=>{
    return current>9;
});
console.log(array1); // [ 1, 4, 9, 16, 25 ]
console.log(newArray1); //[ false, false, false, true, true ]

let newArray2=array1.map((current,indexNo,array)=>{
    return `index no=${indexNo} and value is ${current} and it belongs to ${array}`
});
console.log(newArray2);
// [
//   'index no=0 and value is 1 and it belongs to 1,4,9,16,25',
//   'index no=1 and value is 4 and it belongs to 1,4,9,16,25',
//   'index no=2 and value is 9 and it belongs to 1,4,9,16,25',
//   'index no=3 and value is 16 and it belongs to 1,4,9,16,25',
//   'index no=4 and value is 25 and it belongs to 1,4,9,16,25'
//   ]

// map() is chainable we can attach reduce(),sort(),filter() and so on

let array2=[25,36,49,64,81];
let sqr=array2.map((current) =>
    Math.sqrt(current));
console.log(sqr); //[ 5, 6, 7, 8, 9 ]

// chaining methods
let array3=[2,3,4,5,6,7,8];
let newArray3= array3.map((current)=> current*2)
.filter((current)=>current>10)
console.log(newArray3); //[ 12, 14, 16 ]