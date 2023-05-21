// 1=> new Date() Date object are created 

console.log(new Date()); //2023-04-28T16:53:58.739Z
console.log(new Date().toLocaleString()); //28/4/2023, 10:44:26 pm
// Date.now() return the numeric value corresponding to current time
// the number of millisecond elapsed since 
// (i jan 1970 00:00:00)

console.log(Date.now()); //1682701117111

// --------------------------------------------------------------------

// 2=> new Date(year,month,day,hour,minute,second,millisecond)
//JAN is 0, DEC is 11

console.log(new Date(1999,9,11,4,30,0,0)); //1999-11-10T23:00:00.000Z
console.log(new Date(1999,9,11,4,30,0,0).toLocaleString()); //11/11/1999, 4:30:00 am

console.log(new Date(1999,9,11).toLocaleString()); //11/10/1999, 12:00:00 am
//time automatically appers

console.log(new Date(1999).toLocaleString()); //1/1/1970, 5:30:01 am
//minimum should be 2 arguments //we cant avoid month section

// ------------------------------------------------------------------------

// 3=> new Date() create a new date object as zero time plus milliseconds
console.log(new Date(1682702266185).toLocaleString()); //28/4/2023, 10:47:46 pm
console.log(new Date(0).toLocaleString()); //1/1/1970, 5:30:00 am
console.log(new Date(86400000*2).toLocaleString()); //3/1/1970, 5:30:00 am

//--------------------------------------------------------------------------

// 4=> new Date(dateString) create a new Date object from a Date string

console.log(new Date(1999,9,11,4,30,0,0)); ////1999-11-10T23:00:00.000Z
console.log(new Date(1999,9,11,4,30,0,0).toLocaleString()); //11/11/1999, 4:30:00 am