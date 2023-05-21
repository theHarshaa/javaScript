// reduce()=>flatten an array,it converts the 3D/2D in single dimensional array

// it executes a reducer function on each element of the array,resulting in single output vale

// the reducer function take 4 arrguments(accumulator,current,index,array)
let arr=[1,2,3,4,5,6,7,8];

let sum =arr.reduce((accumulator,current,index,array)=>{
    return accumulator+=current;
})
console.log(sum); //36(1+2+3+4+5+6+7+8)

// *imp
let newArray1=arr.map((current)=>current*2)
                .filter((current)=>current>10)
                .reduce((accumulator,current)=>{
                    return accumulator+=current;
                });
console.log(newArray1); // 42(12+14+16)

// 7 is initial value

let newArray2=arr.reduce((accumulator,current)=>{
    return accumulator+=current;
},7);
console.log(newArray2); //43


// how to flatten an array converting 2d and 3d array into one dimensional array
const array1=[
    [1,2],
    [3,4],
    [5,6],
    [7,8],
]

let flat= array1.reduce((accumulator,current)=>{
    return accumulator.concat(current);
})
console.log(flat); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]