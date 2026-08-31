const seconds = parseInt(process.argv[2]);

if (isNaN(seconds) || seconds <= 0) {
  console.log("Please provide a valid number.");
  process.exit(1);
}

let remaining = seconds;

console.log(`Countdown started for ${seconds} seconds.`);
console.log('Type "cancel" to stop the countdown.');
process.stdin.setEncoding("utf8");

process.stdin.on("data", (input) => {
  if (input.trim().toLowerCase() === "cancel") {
    console.log("Countdown cancelled.");
    process.exit(0);
  }
});

const timer = setInterval(() => {
  console.log(`Remaining: ${remaining}`);
  remaining--;

  if (remaining < 0) {
    clearInterval(timer);
    console.log("Countdown completed!");
    process.exit(0);
  }
}, 1000);

// Run: node task5_cli_countdown.js 5
