function urlEncode(someText){
    for (var i = 0; i < someText.length; i++) {
        if (someText.charAt(i) == ' '){
            someText = someText.slice(0,i) + '%20' + someText.slice(i + 1)
        }
    }
    return someText;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
