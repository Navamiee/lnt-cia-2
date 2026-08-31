const start = new Date();
const end = new Date(start.getTime() + 5000);

const secondsRemaining = Math.ceil((end - start) / 1000);

console.log("Seconds remaining:", secondsRemaining);
