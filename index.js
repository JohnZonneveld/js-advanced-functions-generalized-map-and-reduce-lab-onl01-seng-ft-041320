// Add your functions here
function map(array, funct){
    let r = []
    for ( let i of array) {
        r.push(funct(i))
    }
    return r
}

function reduce(arr, func, startPoint){
    // if startPoint is given result starts with startPoint (value) otherwise with value stored in arr[0]
    let r = (!!startPoint) ? startPoint : arr[0]
    // if startPoint is given start the array at position [0] otherwise [1]
    let i = (!!startPoint) ? 0 : 1
    // i hs already set so in line below we 'skip' let i = part
    for (; i < arr.length; i++) {
      r = func(arr[i], r)
    }
    return r;
  }