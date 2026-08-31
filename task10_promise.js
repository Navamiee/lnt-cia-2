function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject(new Error("Duration cannot be negative"));
      return;
    }

    setTimeout(() => {
      resolve(seconds - 1);
    }, 1000);
  });
}

checkTimeLeftPromise(3)
  .then((remaining) => {
    console.log("Remaining time:", remaining, "seconds");
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
