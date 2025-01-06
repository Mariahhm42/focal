// This function finds a name in an array and executes a callback with the index
const findNameInArray = function (names, callback) {
    if (typeof callback !== "function") {
      console.error("Callback must be a function");
      return;
    }
  
    // Using some method to stop the loop once the name is found
    names.some((name, index) => {
      if (name === "Waldo") {
        callback(index);
        return true;
      }
    });
  };
  
  // This function logs a message with the index where the name was found
  const logNameFoundAtIndex = function (index) {
    console.log(`Found Waldo at index ${index}!`);
  };
  
  findNameInArray(["Alice", "Bob", "Waldo", "Winston"], logNameFoundAtIndex);
  findNameInArray(["Alice", "Bob", "Charlie", "Winston"], logNameFoundAtIndex);
  