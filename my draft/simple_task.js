// function odd_even(num){
//     if(num%2==0){
//         console.log("The Even Number is even");
//     }else{
//         console.log("The number is odd");
//     }
// };

// let num = 22;
// console.log(odd_even());

function odd_even(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let num = 22;
console.log(odd_even(num));