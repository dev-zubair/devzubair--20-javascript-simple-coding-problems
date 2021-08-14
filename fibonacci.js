// Fibonacci Sequence - somantor dhara
/* Example - 
0 + 1 = 1
1 + 1 = 2
2 + 3 = 5
5 + 3 = 8
8 + 5 = 13
13 + 8 = 21
21 + 13 = 34
34 + 21 = 55 
 */
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

/*  
3rd = 2nd + 1st
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
...........
16th = 15th + 14th 
nth = (n-1)th + (n-2)th 
ith = (i-1)th + (i-2)th
*/

const fibo = [0, 1]
for (let i = 2; i <=20; i++){
    // nth = (n-1)th + (n-2)th 
    // ith = (i-1)th + (i-2)th
    fibo[i] = fibo[i-1] + fibo[i-2];
}
// console.log(fibo);


// CONVERT INTO FUNCTION
function fibonacciSeries(num){
    const fibo = [0,1];
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(10);             // 10 sonkha porjonto show korbe 
console.log(fiboSeries);


//TYPE OF 
function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'ERROR!!!!!! Please give a proper number';
    }
    const fibo = [0,1];
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(22);     // fibonacciSeries("sakib") or fibonacciSeries([2223]) dile ERROR show korbe
console.log(fiboSeries);


//POSITIVE AND NEGATIVE NUMBER FUNCTION
function fibonacciSeries(num){
    if(typeof num != 'number'){
        return 'ERROR!!!!!! Please give a proper number';
    }
    if(num < 2){
        return 'YOUR NUMBER IS NEGATIVE. Please put positive number';
    }
    const fibo = [0,1];
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(-23);     // fibonacciSeries("sakib") or fibonacciSeries([2223]) dile ERROR show korbe
console.log(fiboSeries);