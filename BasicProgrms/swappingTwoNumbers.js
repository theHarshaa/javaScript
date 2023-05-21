//without 3rd variable

var a=10;
var b=15;
a=a+b;
b=a-b;
a=a-b;
console.log("without 3rd variable" +"=> a:"+ a + " b:" + b);

//with 3rd variable

var c=10;
var d=15;
var e;
e=d;
d=c;
c=e;
console.log("with 3rd variable" +"=> c:"+ c + " d:" + d);