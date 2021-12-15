
function getFrequencies(arr){
   let obj = {}; 
   for(let i = 0; i < arr.length; i++){
       let el = arr[i];
       if(obj.el !== undefined){
           obj.el +=1
       }
       else {
           obj[el] = 1;
       }
   }

    return obj;
}
console.log(getFrequencies(["A", "B", "A", "A", "A"]))