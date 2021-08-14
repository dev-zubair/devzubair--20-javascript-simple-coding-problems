// MAX with 2 variables - Who is bigger?
const businessman = 540;
const minister = 450;
const army = 600;
if(businessman > minister){
    console.log("Businessman in Bigger");
}
else{
    console.log("Minister is Bigger");
}

//OR HOW YOU CAN DO IT DECLARE A FUNCTION - konta boro, kibhabe function diye declare korbe?
function largestNumber(first, second){
    if (first > second){
        return first;
    }
    else{
        return second;
    }
}

const theLargestNumber = largestNumber(1200, 400);
console.log(theLargestNumber);

// MAx with 3 variables - who is bigger
if(businessman > minister && businessman > army){
    console.log('Businessman is bigger');
}
else if(minister > businessman && minister > army){
    console.log('Minister is bigger');
}
else {
    console.log('Army is Bigger');
}


// Math.max Function - which Value is larger among the three values. 
var max = Math.max(businessman, minister, army);
console.log('The largest number is', max);




//----------------------------------------------------------------------------------------------------------------------
//TASK 1 - Create a function that takes three numbers as input parameter and returns you the largest number of the three
//----------------------------------------------------------------------------------------------------------------------

function myLargestNumber(num1, num2, num3){
    if(num1 > num2){
        return num1;
    }
    else if(num2 > num3){
        return num2;
    }
    else{
        return num3;
    }    
}
var finalLargestNymber = myLargestNumber(1250, 1100, 200);
console.log('The largest number is', finalLargestNymber);

//----------------------------------------------------------------------------------------------------------------------
//TASK 2 - Write a function to find the smallest of 3 numbers - if you want then you can Google it.
//----------------------------------------------------------------------------------------------------------------------
const num1 = 1200;
const num2 = 400;
const num3 = 1300;

const smallestNumber = Math.min(num1, num2, num3);
console.log(smallestNumber);