function timer(duration, onComplete) {
  console.log(`Timer started for ${duration} ms...`);

  setTimeout(() => {
    const message = `Timer of ${duration} ms finished`;
    onComplete(message);
  }, duration);
}

timer(2000, function(message) {
  console.log(message);
});
