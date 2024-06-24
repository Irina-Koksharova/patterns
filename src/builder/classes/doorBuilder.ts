import { PRODUCT, IDoorBuilder } from '../interface';

/**
 * https://refactoring.guru/design-patterns/builder
 *
 * This iis useful when creating complex composite trees because we can program its construction steps to work recursively.
 */

class DoorBuilder implements IDoorBuilder {
  product: PRODUCT.DOOR;
  type: string;
  width?: number;
  height?: number;
  weight?: number;
  color?: string;

  constructor(
    type: string,
    width?: number,
    height?: number,
    weight?: number,
    color?: string
  ) {
    this.product = PRODUCT.DOOR;
    this.type = type;
    this.width = width;
    this.height = height;
    this.weight = weight;
    this.color = color;
  }

  setWidth(width: number) {
    this.width = width;
    return this;
  }

  setHeight(height: number) {
    this.height = height;
    return this;
  }

  setWeight(weight: number) {
    this.weight = weight;
    return this;
  }

  setColor(color: string) {
    this.color = color;
    return this;
  }

  getDoor() {
    console.log("\x1b[1;32mPattern 'Builder' \x1b[0m");
    console.log(
      `New ${this.type} door is constructed! \nParameters: \nwidth - ${this.width}, \nheight - ${this.height}, \nweight - ${this.weight}, \ncolor - ${this.color}`
    );

    return new DoorBuilder(
      this.type,
      this.width,
      this.height,
      this.weight,
      this.color
    );
  }
}

export default DoorBuilder;
