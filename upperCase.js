

function mapping(arr) {
    let result = {};
    for(let i = 0; i < arr.length; i++){
       
       result[arr[i].toLowerCase()] = arr[i].toUpperCase()
    }
    
    return result;
}


console.log(mapping(['s', 'a']))