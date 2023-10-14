function myForEach(func, arr){
    for (let i=0; i<arr.length; i++) {
        func(arr[i] , i, arr);
    }
}

let print = (elem) => { console.log(elem) };

let arr = [1, 2, 3, 4, 5];

myForEach(print, arr);

  



