
let remaining = 5;

const timer = setInterval(() => {
  console.log("Remaining:", remaining);

  remaining--;

  if (remaining < 0) {
    clearInterval(timer);
    console.log("Countdown complete!");
  }
}, 1000);
