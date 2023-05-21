const currDate= new Date();
console.log(currDate.toLocaleString()); //28/4/2023, 11:16:54 pm

// how to get individual date
console.log(currDate.getFullYear()); //2023
console.log(currDate.getMonth()); //3(0-11,jan-dec)
console.log(currDate.getDate()); //28
console.log(currDate.getDay()); //5(fri)

// how to set individual date
console.log(currDate.setFullYear(1999)); //925321636775
//it can optional set month,day
console.log(currDate.setFullYear(1999,9,11)); //939664036775
console.log(currDate.setMonth(9)); //939664036775
console.log(currDate.setDate(11)); //939664036775
console.log(currDate.toLocaleString()); //11/10/1999, 11:17:16 pm
//time is current