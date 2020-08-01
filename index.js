// Add your functions here
function map(array, funct){
    let r = []
    for ( let i of array) {
        r.push(funct(i))
    }
    return r
}

function reduce(arr, func, startPoint){
    let r = (!!startPoint) ? startPoint : arr[0]
    let i = (!!startPoint) ? 0 : 1
    for (; i < arr.length; i++) {
      r = func(arr[i], r)
    }
    return r;
  }