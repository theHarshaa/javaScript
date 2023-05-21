const month=['Mar','Jan','Apr','Dec','Nov'];
// 1-push() =>return the new length of array add the element in the end
console.log(month.push('Feb')); //6
console.log(month); //[ 'Mar', 'Jan', 'Apr', 'Dec', 'Nov', 'Feb' ]

// 2-unshift() => return the new length of array add the element in the begin
console.log(month.unshift('May')); //7
console.log(month); //[ 'May', 'Mar','Jan', 'Apr','Dec', 'Nov','Feb']

// 3-pop() =>remove the last element from an array,change the length also
console.log(month.pop()); //Feb (return the removed element)
console.log(month); //[ 'May', 'Mar', 'Jan', 'Apr', 'Dec', 'Nov' ]

// 4-shift() =>remove the last element from an array,change the length also
console.log(month.shift()); // May(return the removed element)
console.log(month); // [ 'Mar', 'Jan', 'Apr', 'Dec', 'Nov' ]