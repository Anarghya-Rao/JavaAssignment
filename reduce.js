function myReduce(func, arr, initialVal = undefined){
    let i = 0;
    let accumulator;

    if(initialVal == undefined){
        accumulator = arr[0];
        i = 1;
    }
    else{
        accumulator = initialVal;
    }

    let returnVal;
    for ( ; i < arr.length; i++) {
        returnVal = func(accumulator, arr[i], i, arr);
        accumulator = returnVal;
    }

    return accumulator;
}


let add = (a, b) => a + b;

let arr = [1,2,3,4,5];

let sum = myReduce(add, arr);

console.log(sum);