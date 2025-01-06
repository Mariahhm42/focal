const findWaldo = function (names, callback) {
    names.forEach((name, index) => {
      if (name === "Waldo") {
        callback(index);
      }
    });
  };
  
  // Using an anonymous function as the callback
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], function (index) {
    console.log(`Found Waldo at index ${index}!`);
  });
  