function numberOfVowels(somePhrase){
    var vowelsCount = 0;
    for (var i = 0; i <= somePhrase.length - 1; i++) {
        temp = somePhrase.charAt(i)
        if (temp == "a" || temp == "e" || temp == "i" || temp == "o" || temp == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

let x = "orange"
temp = x.charAt(1);
console.log(temp);