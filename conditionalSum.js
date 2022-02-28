function conditionalSum(someArray, condition){
    let final = 0;
    let modVal = 0;
    for (var i = 0; i < someArray.length; i++) {
        if (condition == "even"){
            if (someArray[i] % 2 == 0){
                final = final + someArray[i];
            }
        }
        else if (condition == "odd"){
            if (someArray[i] % 2 != 0){
                final = final + someArray[i];
            }
        }
    }
    return final;
}


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));