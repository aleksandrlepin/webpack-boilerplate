
export class Timer {
    constructor(startTime, stopTime, interval) {
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.interval = interval;
    }

    static timeToNY() {
        const NY = new Date(2019, 0, 1);
        const now = new Date;
        const result = (NY - now) / 86400000;
        document.querySelector('#modal2 h4').textContent = `Days to New Year: ${result.toFixed()}`
        return result.toFixed();
    }

    start() {
        document.querySelector('#timer').classList.add('pulse');
        this.startTime = Date.now();
        clearInterval(this.timerId);
        this.timerId = setInterval(() => {
            this.interval = (Date.now() - this.startTime) / 1000;
            document.querySelector('#timeCounter').textContent = `${this.interval.toFixed(1)}s`;
        }, 100);
    }

    stop() {
        document.querySelector('#timer').classList.remove('pulse');
        this.stopTime = Date.now();
        clearInterval(this.timerId);
        this.interval = (this.stopTime - this.startTime) / 1000;
        console.log(this.interval.toFixed(1), ' sec');
    }

    getTime() {
        document.querySelector('#modal1 h4').textContent = `${this.interval.toFixed(1)} sec`;
        console.log(this.interval.toFixed(1) || 0, ' sec');
    }
}


