let word="i am harsh";
//1=>indexOf()return the index no of first occurence
console.log(word.indexOf("harsh")); //5 (index no starts from 0)
console.log(word.indexOf("Harsh")); //-1 if not found(case sensitive)

console.log(word.indexOf("a")); //2 (index of first occurence)
console.log(word.indexOf("a",4)); // 6(search after index no 4) 

console.log(word.indexOf("h")); //5 (search from forword)
console.log(word.lastIndexOf("h")); //9 (search from backword) 

//2=>Search() return the index no(position) of the first match
//same as indexOf()
console.log(word.search("harsh")); //5
console.log(word.search("HARSH")); //-1
//for case sensitive
console.log(word.search(/HARSH/i)); //5

//search() can't takes start posiotion
// indexOf() can't search against a regular expression
