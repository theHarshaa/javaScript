function () {
    setInterval(()=>{
        console.log(new Date().toLocaleString());
    },1000)
}();
//setting interval on web page loading

// setting time on website
function (){
    setInterval (()=>{
        var date=new Date().toLocaleString();
        document.getElementById("root").innerHTML=date;
    },1000)
}


//
var date=new Date();
console.log(date.toLocaleDateString()); //28/4/2023
console.log(date.toDateString()); //Fri Apr 28 2023
console.log(date.toLocaleTimeString()); //11:38:09 pm
console.log(date.toTimeString()); //23:36:58 GMT+0530 (India Standard Time)
console.log(date.toLocaleString()); //28/4/2023, 11:36:58 pm
