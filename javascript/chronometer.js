class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (typeof printTimeCallback == 'function') {
      printTimeCallback(); 
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime/100/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime/100%60);
  }

  getMilliseconds() {
    return this.currentTime%100;
  }

  computeTwoDigitNumber(value) {
    return (value).toString().padStart(2, '0')
  }

  stop() {
    clearInterval(this.intervalId);
  }
  
  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.getMinutes();
    let seconds = this.getSeconds();
    let milliseconds = this.getMilliseconds();
    let minutesDigit = this.computeTwoDigitNumber(minutes);
    let secondsDigit = this.computeTwoDigitNumber(seconds);
    return minutesDigit + ":" + secondsDigit + ":" + milliseconds;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
