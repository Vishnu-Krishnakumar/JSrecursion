
console.log("test");
console.log(fibs(8))
console.log(fibsRec(3));
let arr = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(arr));
function fibs(n) {
    let fib = [0,1];
    if (n <= 1) {
        return fib;
    }
    for (let i = 2; i < n; i++){
        let total = fib[i - 1] + fib[i - 2];
        fib.push(total);
    }
    return fib
}

function fibsRec(n, arr = [0, 1],i = 2) {
    if (n <= 2) {
        if (n === 1) {
            arr.pop();
            return arr;
        }
        return arr;
    }
    arr.push(arr[i-1]+arr[i-2])
    return fibsRec(n-1,arr,i+1)  ;
}

function mergeSort(arr){
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle)
    const right = arr.slice(middle);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const arr = [];
    let leftI = 0;
    let rightI = 0;

    while (leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) {
            arr.push(left[leftI]);
            leftI++;
        }
        else {
            arr.push(right[rightI]);
            rightI++;
        }
    }
    left = left.slice((leftI));
    right = right.slice(rightI);
    return arr.concat(left).concat(right);
}