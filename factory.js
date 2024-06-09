/**
 * https://blog.eney.solutions/coding/javascript/js-patterny-factory.html
 *
 * This is useful when we need to create objects of the same class with different input data.
 */

class Door {
    constructor(type, width, height, weight) {
        this.type = type
        this.width = width
        this.height = height
        this.weight = weight
    }

    getDescription () {
        console.log(`New ${this.type} door is constructed! \nParameters: \nwidth - ${this.width}, \nheight - ${this.height}, \nweight - ${this.weight}.`)
    }
}

const woodenDoor = new Door('wooden', 80, 200, 10)
woodenDoor.getDescription() // New wooden door is constructed! ...

const ironDoor = new Door('iron', 100, 200, 50)
ironDoor.getDescription() // New iron door is constructed! ...