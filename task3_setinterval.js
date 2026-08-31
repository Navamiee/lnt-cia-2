// Node.js timers methods used:
// setInterval() and clearInterval()

let seconds = 5;

const timer = setInterval(() => {
  console.log("Remaining:", seconds);
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown complete!");
  }
}, 1000);
