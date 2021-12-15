

function printSum(symbol, ...elements){


switch(symbol) {
case '*': 
let mult = elements[0]
for(let i = 1; i < elements.length; i++){
    mult *= elements[i]
}
return mult;

case '-':
    let diff = elements[0]
    for(let i = 1; i < elements.length; i++){
        diff -= elements[i]
    }
    return diff;

case '**':
    let pow = elements[0];
    for(let i = 1; i < elements.length; i++){
        pow = pow** elements[i]
    }
    return pow;


default: 
    let sum = symbol;
    if (!isNaN(symbol)) {
        
        for(let i = 0; i < elements.length; i++){
            sum += elements[i]
        }
        return sum;
    }

};

}

console.log(printSum('Gago', 25, 2, 3))
