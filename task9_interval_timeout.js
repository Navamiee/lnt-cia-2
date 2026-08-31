let remaining = 5;

const interval = setInterval(() => {
  console.log(`Remaining: ${remaining} seconds`);
  remaining--;

  if (remaining < 0) {
    clearInterval(interval);
  }
}, 1000);

setTimeout(() => {
  console.log("Time's up!");
}, 6000);
