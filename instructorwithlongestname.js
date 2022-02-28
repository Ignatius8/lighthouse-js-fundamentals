function instructorWithLongestName(instructors){
    let maxLength = 0;
    let final;
    for(var i = 0; i <= instructors.length - 1; i++) {
        let currname = instructors[i].name;
        if (currname.length > maxLength) {
            maxLength = currname.length;
            final = instructors[i];
        }
    }
    return final;
}

console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));