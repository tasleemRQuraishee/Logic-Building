//1
// function reverseAString (str){
//     return str.split("").reverse().join("");

// }

// console.log(reverseAString("hello"));

//2
function reverseAString(str){
    const splittedInput = str.split("");
    const reversedArray = splittedInput.reverse("");
    const joinArray = reversedArray.join("");
    // console.log(joinArray)
    return joinArray;
}
console.log(reverseAString("raza"))













//1
// function reverseAString(inputString){
    
//     console.log(inputString[0]);
// }

// console.log(reverseAString("Tasleem"))



//2
// function reverseAString(inputString){
//     for(let i = inputString.length; i>=0; i--){
 
//         console.log(inputString[i]);
//     }
    
    
// }

// console.log(reverseAString("Tasleem"))


//3
// function reverseAString(inputString){
//     let result = "";
//     for(let i = inputString.length-1; i>=0; i--){
 
//         result = result + inputString[i];
        
//     }
//     return result;
    
    
// }

// console.log(reverseAString("Tasleem"))



// //4
// function reverseAString(inputString){
//     if(typeof inputString !== "string"){
//         throw new Error ("Only String are allow")
//     }
//     let result = "";
//     for(let i = inputString.length-1; i>=0; i--){
 
//         result = result + inputString[i];
        
//     }
//     return result;
    
    
// }

// console.log(reverseAString("Tasleem"))