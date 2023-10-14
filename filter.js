function myFilter(func, arr){
    let newArr = [];

    for (let i=0; i<arr.length; i++) {
        let returnVal = func(arr[i], i, arr);
        
        if(returnVal){
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

let isEven = (num) => (num % 2 == 0) ? true : false;

let arr = [1,2,3,4];

let newArr = myFilter(isEven, arr);

console.log(newArr);