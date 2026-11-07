// function oe(a){
//     const remainder = (a % 2);

//     if( remainder === 0 ){
//         return "even"
//     }else{
//         return "odd";
//     }
// }
// console.log(oe(4))





// function oe(a){
//     return (a & 1) == 0 ? "even" : "odd";
// }

// console.log(oe(3))
// console.log(oe(8));


function oe(a){
    switch (a&1){
        case 0:
             return "even";
             case 1:
                return "odd";

    }
}
console.log(oe(4)); // even
console.log(oe(5)); // odd