
let arr = [1, 2, 3, 4, 3, 2, 1];
let digit;

function finddigit(arr) {

    let sumOfArr = arr.reduce(function(previous, current) {
        return previous + current;
    }, 0)
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        sum += arr[i];
        if(((sumOfArr - arr[i]) / 2)  === sum - arr[i])  {
            digit = arr[i]
        };
     }
    return digit;
}

console.log(finddigit(arr))
