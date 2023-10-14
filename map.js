function myMap(func, arr){
    let newArr = [];

    for (let i=0; i<arr.length; i++) {
        let returnVal = func(arr[i], i, arr);
        newArr.push(returnVal);
    }
    
    return newArr;
}

let isEven = (num) => (num % 2 == 0) ? "Even" : "Odd";

let arr = [1, 2, 3, 4];

let newArr = myMap(isEven, arr);

console.log(newArr);