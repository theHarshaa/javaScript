// 1=> Math.PI
console.log(Math.PI); //3.141592653589793

//2=> Math.round() return the value rounde to it's nearest integer
console.log(Math.round()); //NaN
console.log(Math.round(3.14)); //3
console.log(Math.round(3.73)); //4
console.log(Math.round(-3.73)); //-4

// 3=> Math.pow(x,y) return the value of x to the power of y 
console.log(Math.pow(2,3)); //8
console.log(2**3);  //8

// 4=> Math.sqrt(x) return the square root  
console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(-25)); //NaN


// *imp 5=> Math.abs() return the absolute positive value
console.log(Math.abs(-55)); //55

// *imp 6=> Math.ceil() return the value rounded upto nearest integer
console.log(Math.ceil(4.4)); //5
console.log(Math.ceil(-4.4)); //-4

// *imp 7=> Math.floor() return the value rounded down to its nearest integer
console.log(Math.floor(4.7)); //4
console.log(Math.floor(-4.7)); //-5


// 8=> Math.min() used to find the lowest value in a list of argument
console.log(Math.min(0,150,30,20,-8,-200,655)); //-200

// 9=> Math.max() used to find the higher value in a list of argument
console.log(Math.max(0,150,30,20,-8,-200,655)); //655

// 10=> Math.random() return the random number b/w 0(inclusive) and 1
console.log(Math.random()); //0.7895867786728754.............0.23710122112887855......0.3347930563418482

//ramdom number b/w 1 to 10
console.log(Math.round(Math.random()*10+1)); // 6....3....4.....10...1

//set the starting and end point in Math.random()
// console.log(Math.random()*(start-end)+end);
console.log(Math.round(Math.random()*(5-15)+15)); //6...........7......8....11.....14

// *imp 11=> Math.trunc() return the integer part of a number
console.log(Math.trunc(+4.4)); //4
console.log(Math.trunc(-4.4)); //-4
//note=> if the argument is +ve then Math.trunc() is equivalent to Math.floor()
//otherwise Math.trunc() is equivalent to Math.ceil()
