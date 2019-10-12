class GuessingGame {

    constructor() {
    }

    setRange(min, max) {
        this.floorNum = min;
        this.ceilNum = max;
    }

    guess() {
        this.average = Math.ceil((this.floorNum + this.ceilNum) / 2);

        return this.average;
    }

    lower() {
        this.ceilNum = this.average;
    }

    greater() {
        this.floorNum = this.average;
    }
}

module.exports = GuessingGame;