// // function factorial(n){

// //     if(!Number.isInteger(n) || n<0){
// //         return "Invalid input";
// //     }

// // let result = 1;
// // for(let i= 1; i<=n; i++){
// //     result = result * i;
// // }
// // return result;

// // }
// // console.log(factorial(5))



// function calculateFactorial(inputNumber){

//     if(inputNumber<0){
//         throw new error ("inputnumber should be greater than or equal to zero")
//     }
//      if (!Number.isInteger(inputNumber)) {
//         throw new Error("Input number must be an integer");
//     }

//     let result = 1;
//     for(let i=1; i<= inputNumber; i++){
//       //  result = result * i;
//       result *= i
//         // console.log(i);
//     }
//     return result;
// }
// console.log(calculateFactorial(6))



function calculateFactorialRecursion(inputNumber){

    if(inputNumber <0){
        throw new Error("input should be grater than or equal to zero")
    }

    if(inputNumber === 0 || inputNumber === 1){
        return 1;
    }
    return inputNumber * calculateFactorialRecursion(inputNumber - 1);
}
console.log(calculateFactorialRecursion(100))