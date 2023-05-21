//WAP that works out whether if a given year is leap year or not

var year=2020;
if(year%4===0) {
    if (year%100===0) {
        if (year%400===0) {
            console.log("leap year");
        }else{
            console.log("not a leap year");
        }
    }else {
        console.log("leap year");
    }
}else {
    console.log("not a leap year")
}