/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work. if !hungry - go back to bed
 * Otherwise, we want to pick something up and eat it in the lab when 
 * we've got less than 20 minutes or to try a place nearby if we've (else if available time < 20)
 * got between 20 and 30 minutes. If we have any more time than that, (else else if available time >= 20 && avaialableTime <= 30)
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare. ()
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */
const whatToDoForLunch = function(hungry, availableTime) {
  if (!hungry)
    console.log("Go back to work, you're not hungry!");
  else 
    if (availableTime < 20)
      console.log ("Pick something else and eat it in the lab");

    else if (availableTime >= 20 && availableTime <= 30)
      console.log("Try a new place nearby")
    else {
        console.log ("You're in a Bootcamp, reconsider how much time you have to spare");
      }
};
console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
