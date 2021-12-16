
    let obj = {
        bedroom: {   
        slippers: 10000,
        piano: 550,
        call: "vet",
        travel: "world",
        }
    }

    function getValue (obj) {
        let mainObj  = {};
        for (let keys in obj){
                mainObj[keys] = {}
            for(let keys1 in obj[keys]){
                if(typeof obj[keys][keys1] === 'number' || obj[keys][keys1] === 0){
                    mainObj[keys][keys1] = obj[keys][keys1]
                } 
            }
        }

        return mainObj;
    }

   console.log(getValue(obj))











    // let result = {};

    // function getNewObj(obj) {
    //     const rek = function(obj, item){
    //         if( typeof obj.item === 'number'){
    //             result[item] = obj.item;
    //         }
    //         else 
    //     }
    // }









    //     let (for value of Object.values(obj)){
    //         if(!isNaN(+value)){

    //         }
    //     }


    //     return result;
    // }
    // let arr = Object.values(obj.bedroom)
    // arr.forEach(function(val) {
    //     if(!isNaN(+val)) {
    //         result[obj.bedroom] = arr[val];
    //         return result;
    //     }
    // })
    // console.log(result)

    

    