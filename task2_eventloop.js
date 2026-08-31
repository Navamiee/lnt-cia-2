// V8 executes JavaScript code, while libuv handles
// asynchronous operations such as timers without blocking.

console.log("Program started");

setTimeout(() => {
  console.log("Timer finished");
}, 3000);

console.log("Another message before timer");
