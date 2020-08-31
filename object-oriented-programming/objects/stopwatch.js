function Stopwatch() {
  let duration = 0;
  let running = false;
  let startTime = null;
  let endTime = null;

  this.start = function () {
    if (running) {
      throw new Error('Stopwatch already running!!');
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error('Stopwatch not running!!');
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    duration = 0;
    running = false;
    startTime = null;
    endTime = null;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      if (running) {
        throw new Error('Stop the watch first!');
      }
      return duration;
    },
  });
}

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {}, 3000);
  });
}
