/**
 *Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. 
 */


array = [10, 20, 30, 40, 50];

let length = array.length;

function make_avg(array,length){
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum += array[i];
    }
    let avg = sum / array.length;
    return avg;
}

console.log(make_avg(array,length));