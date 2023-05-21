let fName="Harsh";
let lName="Singh"
// 1=>toLowerCase() toUpperCase()
console.log(fName.toLowerCase()); //harsh
console.log(fName.toUpperCase()); //HARSH

// 2=>concat() join two or more string 
console.log(fName.concat(" " ,lName)); //Harsh Singh 

// 3=>trim() removes white space from both side of the string(starting,ending) not middle 
let msg="         hello        ";
console.log(msg.trim()); //hello

// 4=>split() convert a string to an array
// [ 'a', 'e', 'i', 'o', 'u' ]
var t1="a,e,i,o,u";
console.log(t1.split(","));  //split on commas(,)

var t1="a e i o u";
console.log(t1.split(" ")); //split on spaces( )

var t1="a|e|i|o|u";
console.log(t1.split("|")); //split on pipe(|)
