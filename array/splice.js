// splice()=> add/remove the element from an array
// splice(index no,delete-count,element)
const month= ['jan','mar','apr','jun','july'];
// 1=>adding 'dec'  to the end
const newMonth = month.splice(month.length,0,'dec')
console.log(month); //[ 'jan', 'mar', 'apr', 'jun', 'july', 'dec' ]

// 2=> return value of splice() is always []
console.log(newMonth); //it shows deleted element,there is no deletion

// 3=>update mar to MAR
const indexMar= month.indexOf('mar');
if(indexMar!=-1){
    const update =month.splice(indexMar,1,"MAR")
    console.log(update); // [ 'mar' ] (returns deleted value)
    console.log(month); //[ 'jan', 'MAR', 'apr', 'jun', 'july', 'dec' ]
}else{
    console.log('not found');
}

//4 =>Delete jun 
const indexJun=month.indexOf('jun');
if(indexJun!=-1){
    const del = month.splice(indexJun,1);
    console.log(del); // [ 'jun' ] (returns deleted value)
    console.log(month); // [ 'jan', 'MAR', 'apr', 'july', 'dec' ]
}else{
    console.log('not found');
}