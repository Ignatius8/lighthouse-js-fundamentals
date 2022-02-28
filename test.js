function calculateRectangleArea(length, width){
  if (length <= 0 || width <= 0){
    return "undefined"
  }
  else{
    return length * width
  }
}

function calculateTriangleArea(base, height){
  if (base <= 0 || height <= 0){
    return "undefined"
  }
  else{
    return (base * height) / 2
  }
}


function calculateCircleArea(radius){
  if (radius <= 0){
    return "undefined"
  }
  else{
    return (Math.PI * (radius * radius))
  }
}

//console.log(calculateCircleArea(10)); // should print 314.159...
//console.log(calculateCircleArea(3.5)); // should print 38.484...
//console.log(calculateCircleArea(-1)); // should print undefined


function range(start, end, step){
  var final = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0){
    return final;
  }
  else{
    let x = start;
    while(x <= end){
      final.push(x);
      x = x + step;
    }
    return final;
  }
}
//console.log(range(0, 10, 2));
//console.log(range(10, 30, 5));
//console.log(range(-5, 2, 3));

function lastIndexOf (someArray, val) {
  let index = -1;
  someArray.forEach(function(element, i) {
    if (element === val) index = i;
  });
  return index;
}

//console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
//console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
//console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
//console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
//console.log(lastIndexOf([], 3), "=?", -1);

function loopyLighthouse(rangeArray, multiples, valNames){

  for (var x = rangeArray[0]; x <= rangeArray[1]; x ++){
    if(x % multiples[0] === 0 && x % multiples[1] === 0){
      console.log(valNames[0] + valNames[1]);
    }
    else if (x % multiples[0] === 0){
      console.log(valNames[0]);
    }
    else if (x % multiples[1] === 0){
      console.log(valNames[1]);
    }
    else{
      console.log(x)
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
