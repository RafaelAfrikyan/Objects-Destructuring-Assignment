
    
let city = {   
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
    };
    

   function cityFacts (city) {
    let x = city.name;
    let y = city.population;
    let z = city.continent;

    let result = `${x} has a population of ${y} and is statued in ${z}`;
    return result;
   }
   
   console.log(cityFacts(city)) 