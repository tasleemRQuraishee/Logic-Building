// function smallestofThree(a,b,c){
//     if(a<b && a<c){
//         return a;
//     }else if(b<a && c<a){
//         return b;
//     }else if(c<a && c<b){
//         return c;
//     }else{
//         console.log(a)
//     }
// }
// console.log("smallest number" + smallestofThree(9,9,9))




// function smallestofThree(a,b,c){
//     if(a<b && a<c){
//         return a;
//     }else if(b<a && c<a){
//         return b;
//     }else if(c<a && c<b){
//         return c;
//     }
//     return a;
// }
// console.log("smallest number" + smallestofThree(2,2,2))



function smallestofThree(a, b, c){

    if(isNaN(a) || isNaN(b) || isNaN(c)){
        return "Invalid input"
    }
    let smallestNumber =a;
    if(b< smallestNumber){
        smallestNumber = b;

    }
    if(c< smallestNumber){
        smallestNumber =c ;

    }
    return smallestNumber
}

console.log("smallest number" + smallestofThree  ("sffs",4,5))