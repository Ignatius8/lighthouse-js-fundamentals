function whereCanIPark (parkings, type){
    let final = false;
    for(row = 0; row < parkings.length; row++) {
        for(column = 0; column < parkings[row].length; column++) {
            if(type === 'regular') {
                if(parkings[row][column] == 'R' && final == false) {
                final = [column,row];
                }
            } 
            else if (type === 'small') {
                if((parkings[row][column] == 'S' || parkings[row][column] == 'R') && final == false) {
                    final = [column,row];
                }
            }
            else if (type === 'motorcycle'){
                if((parkings[row][column] == 'S' || parkings[row][column] == 'M' || parkings[row][column] == 'R') && final == false) {
                    final = [column,row];
                }
            }
        }
    }
    return final;
}

console.log(whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ],
    'regular'
  ));
  
  console.log(whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M']
    ],
    'small'
  ));
  
  console.log(whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
  ))