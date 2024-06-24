/**
 * https://blog.eney.solutions/coding/javascript/js-patterny-factory.html
 *
 * This is useful when we need to create objects of the same class with different input data.
 */

class DoorFactory {
  constructor(type, width, height, weight, color) {
    this.product = 'door';
    this.type = type;
    this.width = width;
    this.height = height;
    this.weight = weight;
    this.color = color;
  }

  getDescription() {
    console.log("\x1b[1;32mPattern 'Factory' \x1b[0m");
    console.log(
      `New ${this.type} door is constructed! \nParameters: \nwidth - ${this.width}, \nheight - ${this.height}, \nweight - ${this.weight}, \ncolor - ${this.color}`
    );
  }
}

export default DoorFactory;
