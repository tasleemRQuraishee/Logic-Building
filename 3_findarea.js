// function area(length,width) {
//     const area =  length * width;
//     console.log("Area is " , area)

    
// }
// area(2,3)


function area(length,width){
    if(length<=0){
        throw new RangeError("lenght should be a positive number")
    }

    if(width <= 0){
        throw new RangeError("width should be a positive number")
    }
    console.log("Area is " + length + "and" + width + " number " + (length*width))

}

area(2,3)