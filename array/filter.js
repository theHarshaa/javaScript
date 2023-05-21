//1--find()=>it return first element of the array
const prices=[100,200,300,400,987,999];
const findElem = prices.find((currentVal)=>{
    return currentVal < 400; 
});

console.log(findElem);//100(only return 1st element found) 
//only one line
console.log(prices.find((currentVal)=> currentVal< 400)); //100
console.log(prices.find((currentVal)=> currentVal< 100));//undefined if not found


//2--findIndex()=>it return first element's index no. of the array
const findIndex= prices.findIndex((current)=>{
    return current<400;
});

console.log(findIndex);//0 (return the index no of element)
console.log(prices.findIndex((currentVal)=> currentVal< 400)); //0 index no.
console.log(prices.findIndex((currentVal)=> currentVal< 100)); //-1 if not found

//3--filter()=>it contain all the element of calling array
const filterElem= prices.filter((currentVal)=>{
    return currentVal<400;
});

console.log(filterElem); //[ 100, 200, 300 ]
console.log(prices.filter((currentVal)=> currentVal< 400)); //[ 100, 200, 300 ] (return all the element)
console.log(prices.filter((currentVal)=> currentVal< 100));//[] empty array 