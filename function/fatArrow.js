const sum =() =>{
    let a=5,b=6;
    let sum=a+b;
    return `sum is ${sum}`;
}
console.log(sum());

//we can write the code in one single line

const subs = () => `sum is ${(a=10)-(b=3)}`;
console.log(subs());