let newArr = [];
let arr = [1,2, 3, 4]
k = 2;

function recursia(arr) {

    if (k-- <= 0) {
        return arr;
    }

    let maxValue = Math.max(...arr);
    let maxIndexOfArray = arr.indexOf(maxValue);

    let newArray = [];
    newArray.push(maxValue);

    arr.splice(maxIndexOfArray, 1, arr[0]);
    arr.shift();

    let reorderedArray = recursia(arr);

    return newArray.concat(reorderedArray);
}

console.log(recursia(arr));


// function changePlace(array, cb){
    
//     const sumOfArr = function (arr){
//       let firstMax = arr.indexOf(Math.max(...arr))
//       return firstMax
//     }
      
//     for (let i = 0; i <1; i++){
    
//     newArr[i] = arr[sumOfArr(arr)]
//     arr =  arr.splice(i, sumOfArr(arr))
//     }
    
//     newArr = newArr.concat(arr)
//     return newArr
//     }
    
//     console.log(changePlace([1, 2, 3, 4], function (arr){
//         let firstMax = arr.indexOf(Math.max(...arr))
//         return firstMax
    //   }))

