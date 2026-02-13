<<<<<<< HEAD
const readline = require("readline");

const guestList = ["Ali", "Hussain", "Zeeshan", "Adeel", "Asad", "Ahmed"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (inputName) => {

  // Case-insensitive check
  const exists = guestList.some(name => name.toLowerCase() === inputName.toLowerCase());

  if (exists) {
    console.log("Welcome to the party, " + inputName + "!");
  } else {
    console.log("Sorry, you're not on the guest list.");
  }

  rl.close();
});
=======
const readline = require("readline");

const guestList = ["Ali", "Hussain", "Zeeshan", "Adeel", "Asad", "Ahmed"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", (inputName) => {

  // Case-insensitive check
  const exists = guestList.some(name => name.toLowerCase() === inputName.toLowerCase());

  if (exists) {
    console.log("Welcome to the party, " + inputName + "!");
  } else {
    console.log("Sorry, you're not on the guest list.");
  }

  rl.close();
});
>>>>>>> eee7322c790a0d9f808636c9bcaada8e9be78db0
