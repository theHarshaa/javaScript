// 1-forIn=>provide element's index number
 var num=["1","2","3","4"];
for (let elements in num) {
    console.log(elements);
    
}
// 2-forOf()=>provide element
for (let elements of num) {
    console.log(elements);
    
}
// 3-forEach()=>provide element,index number and array also
num.forEach(function (element,index,array){
     console.log(element);//element
     console.log(index);//index no
    console.log(array);//array
})



