//replace a specified value with another value
// replace(searchFor,replaceWith)

let data= "I am harsh";
//does not change the string,and return a new string
console.log(data.replace("harsh","Harsh")); //I am Harsh
console.log(data); //I am harsh

//replace only first match
let Data="I am harsh,harsh"
console.log(Data.replace("harsh","HARSH")); //I am Harsh,harsh
console.log(Data.replace("HARSH","harsh")); //case sensitive