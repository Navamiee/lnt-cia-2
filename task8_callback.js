function checkTimeLeftCallback(seconds, callback) {
  if (seconds < 0) {
    return callback(new Error("Duration cannot be negative"), null);
  }

  setTimeout(() => {
    callback(null, seconds - 1);
  }, 1000);
}

checkTimeLeftCallback(3, (err, remaining) => {
  if (err) {
    console.log("Error:", err.message);
    return;
  }

  console.log("Remaining time:", remaining, "seconds");
});
