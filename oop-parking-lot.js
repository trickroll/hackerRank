class ParkingLot {
    constructor(space) {
        this.limit = space
        this.usage = 0
        this.cars = {}
    }
    park(car) {
        if (this.usage <= this.limit) {
            if (this.cars[car.name]) {
                console.log('car already parked')
            }
            else {
                this.usage++
                this.cars[car.name] = car
            }

        }
        else {
            console.log("parking lot is full!")
        }
    }

    exit(car) {
        if (!this.cars[car.name]) {
            console.log('car is not parked!')
        }
        else {
            delete this.cars[car.name]
            this.usage--
        }
    }

    available() {
        return this.usage < this.limit
    }
}

class Car {
    constructor(name) {
        this.name=name
    }
}

const parkingLot = new ParkingLot(20)
let benz = new Car("mercedes")

parkingLot.park(benz)
console.log(parkingLot.usage)
parkingLot.exit(benz)
console.log(parkingLot.usage)
