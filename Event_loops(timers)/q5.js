const readline = require("readline");

// Setting up input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Asking the user for countdown time
rl.question("Enter the number of seconds for countdown: ", function (seconds) {
  let timeLeft = parseInt(seconds);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Invalid input. Please enter a positive number.");
    rl.close();
    return;
  }

  console.log(`Countdown started for ${timeLeft} seconds...`);
  console.log("Press 's' to stop the countdown.\n");

  // Starting countdown using setInterval
  const intervalId = setInterval(() => {
    console.log(`Time left: ${timeLeft}s`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(intervalId);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Using setTimeout to begin checking for key press after 1 second
  setTimeout(() => {
    process.stdin.on("data", (key) => {
      if (key.toString().trim().toLowerCase() === "s") {
        clearInterval(intervalId);
        console.log("\nCountdown stopped by user!");
        rl.close();
      }
    });
  }, 1000);
});
