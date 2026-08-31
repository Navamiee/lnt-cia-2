console.log("Countdown App Ready");

let seconds = 3;

const timer = setInterval(() => {
  console.log(`Remaining: ${seconds}s`);
  seconds--;

  if (seconds < 0) {
    clearInterval(timer);
    console.log("Countdown finished");
  }
}, 1000);

/*
Commands:
mkdir countdown-app
cd countdown-app
npm init -y
node countdown.js
*/
