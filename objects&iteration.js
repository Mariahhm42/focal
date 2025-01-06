// for (var i = 0; i < 10; i++) {
  // iterating over an array
//   console.log(someArray[i]);
// }
// var planetMoons = {
//     mercury: 0,
//     venus: 0,
//     earth: 1,
//     mars: 2,
//     jupiter: 67,
//     saturn: 62,
//     uranus: 27,
//     neptune: 14
//   };
//   for (var planet in planetMoons) {
//     var numberOfMoons = planetMoons[planet];
//     console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
//   }

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
  ];
  
  const result1 = countOnly(firstNames, {
    Jason: true,
    Karima: true,
    Fang: true,
    Agouhanna: false,
  });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);

  

