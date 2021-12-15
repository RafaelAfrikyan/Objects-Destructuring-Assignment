
    
let city = {   
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
    };
    

   function cityFacts (city) {
    let {name: x, population: y, continent: z} = city;

    return `${x} has a population of ${y} and is statued in ${z}`;
    
   }
   
   console.log(cityFacts(city)) 