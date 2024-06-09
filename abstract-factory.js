/**
 * https://blog.eney.solutions/coding/javascript/javascript-pattern-abstract-factory.html
 *
 * The Abstract Factory design pattern is used when we need to add an additional layer of abstraction
 * over the Factory pattern.
 */

class WoodenDoor {
    constructor() {
        this.type = 'wooden'
    }

    getDescription() {
        console.log(`Door type: ${this.type}.`)
    }
}

class IronDoor {
    constructor() {
        this.type = 'iron'
    }

    getDescription() {
        console.log(`Door type: ${this.type}.`)
    }
}

class WoodenDoorExpert {
    constructor() {
        this.specialization = 'wooden doors'
    }

    getDescription() {
        console.log(`Expert specialization: ${this.specialization}.`)
    }
}

class IronDoorExpert {
    constructor() {
        this.specialization = 'iron doors'
    }

    getDescription() {
        console.log(`Expert specialization: ${this.specialization}.`)
    }
}

class WoodenDoorFactory {
    getDoor(){
        return new WoodenDoor()
    }

    getExpert() {
        return new WoodenDoorExpert()
    }
}

class IronDoorFactory {
    getDoor(){
        return new IronDoor()
    }

    getExpert() {
        return new IronDoorExpert()
    }
}

class DoorFactory {
    constructor(type) {
        this.type = type
    }

    getDoorFactory() {
        switch (this.type) {
            case 'wooden':
                return new WoodenDoorFactory()
            case 'iron':
                return new IronDoorFactory()
            default:
                console.log('Factory type is not defined!')
                return null
        }
    }
}

const woodenDoorFactory = new DoorFactory('wooden')
woodenDoorFactory.getDoorFactory().getDoor().getDescription() // Door type: wooden.
woodenDoorFactory.getDoorFactory().getExpert().getDescription() // Expert specialization: wooden doors.

const ironDoorFactory = new DoorFactory('iron')
ironDoorFactory.getDoorFactory().getDoor().getDescription() // Door type: iron.
ironDoorFactory.getDoorFactory().getExpert().getDescription() // Expert specialization: iron doors.

const doorFactory = new DoorFactory()
doorFactory.getDoorFactory() // Factory type is not defined!
