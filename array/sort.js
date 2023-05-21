const month=['Mar','Jan','Apr','Dec','Nov'];
const number=[1,5,3,4,5,6,2,100,25]
console.log(month.sort()); //[ 'Apr', 'Dec', 'Jan', 'Mar', 'Nov']
console.log(month.sort().reverse()); //[ 'Nov', 'Mar', 'Jan', 'Dec', 'Apr' ]
console.log(number.sort()); //[ 1, 100, 2, 25, 3,4, 5, 5,  6  ]
// incorrect when sorting number
//if numbers are sorted as string 
//25 is bigger then than 100 
// coz 2 is bigger than 1 

