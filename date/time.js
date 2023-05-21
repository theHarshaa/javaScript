const currTime= new Date();
console.log(currTime.toLocaleString()); //28/4/2023, 11:25:13 pm

// how to get individual time
console.log(currTime.getTime()); //1682704513277(ms)
//return the number of ms since 1 jan 1970
console.log(currTime.getHours()); //23
//return the hour of a date as a number
console.log(currTime.getMinutes()); //25
console.log(currTime.getSeconds()); //13
console.log(currTime.getMilliseconds()); //277


// how to set individual time(require time in ms)
console.log(currTime.setTime()); //NaN
console.log(currTime.setHours(15)); //NaN
console.log(currTime.setMinutes(5)); //NaN
console.log(currTime.setSeconds(5)); //NaN
console.log(currTime.setMilliseconds(5)); //NaN
console.log(currTime.toLocaleString());
console.log(currTime.setTime(0)); //in ms
console.log(currTime.toLocaleString()); //1/1/1970, 5:30:00 am
