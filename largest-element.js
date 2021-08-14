//--------------------------------------
// Find the largest element of an Array
//--------------------------------------
function largestElement(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const ages =[12, 23, 45, 56, 67, 78, 90];
const oldest = largestElement(ages);
console.log(oldest);


//--------------------------------------
// TASK - Find the lowest element of an Array
//--------------------------------------
var arr = [5,1,9,5,7];
var smallest = arr[0];

for(var i=1; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];   
    }
}

console.log(smallest);