// function BMI(w,h){
//     var bmi=Math.round(w/(h*h));
//     return bmi;
// }
// console.log(BMI(65,1.8));

//advance

function BmiCalc(w,h){
    var BMI=Math.round(w/(h*h));
    if(BMI<18.5){
        console.log('your BMI is' + BMI + 'so you are underweight'); 
    }
    if(BMI>=18.5 && BMI<=24.9){
        console.log('your BMI is ' + BMI + ' so you are normal'); 
    }
    if(BMI>24.9){
        console.log('your BMI is ' + BMI + ' so you are overweight'); 
    }
}

BmiCalc(65,1.8); //enter the weight and height