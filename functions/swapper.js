// Function to swap values between two objects at specified keys
const swapper = function (key1, object1, key2, object2) {
    console.log("Swap!");
  
    // Storing the value of key1 in object1 in a temporary variable
    const temp = object1[key1];
  
    // Swap the values between the objects
    object1[key1] = object2[key2];
    object2[key2] = temp;
  
    // Log the updated objects
    console.log("object1: ", object1);
    console.log("object2: ", object2);
  };
  
  // Test cases
  swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
  swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
  swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });
  