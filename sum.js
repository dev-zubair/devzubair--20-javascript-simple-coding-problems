// ekta array er moddhe joto gulo upadan ache sob gulor JOGFOL ber koro
 const numbers = [23, 34, 56, 67, 89, 90, 56, 53, 32];
 sum = 0;
 for(let i = 0; i < numbers.length; i++){
     const element = numbers[i];
     sum = sum + element;
 }
 console.log(sum);


 //Declare it in a FUNCTION
 function arrayTotal(numbers){
     let sum = 0;
     for(let i = 0; i < numbers.length; i++){
         const element = numbers[i];
         sum = sum + element;
     }
     return sum;
 }

 const total = arrayTotal([10, 20, 30]);
 console.log(total);