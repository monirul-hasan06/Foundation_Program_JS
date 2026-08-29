/**
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

let num1= 22;

function check(num1){
    if(num1%2===0){
        let result = num1/2;
        return result;
    }else{

        let result = num1*2;
        return result;
    }
};

console.log(check(num1));