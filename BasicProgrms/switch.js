var area ="circle";
var PI=3.14;
var l=5,b=2,r=3;

switch (area){
    case "circle":
        console.log(PI*r**2);
    break;
    case "rectangle":
            console.log(l*b);
    break;
    case "triangle":
            console.log((l*b)/2);
    break;
    default :
            console.log("enter a valid thing")
}