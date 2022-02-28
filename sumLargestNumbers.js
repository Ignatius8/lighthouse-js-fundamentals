function sumLargestNumbers(someArray){
    let max = 0;
    let maxLess = 0;
    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] > max){
            maxLess = max;
            max = someArray[i];
        }
        else if(someArray[i] < max && someArray[i] > maxLess){
            maxLess = someArray[i];
        }
    }
    return (max + maxLess);
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

