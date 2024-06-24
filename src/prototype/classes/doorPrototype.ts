import { IDoor, PRODUCT } from '../../interface';
import { IDoorPrototype } from '../interface';

/**
 * https://www.patterns.dev/vanilla/prototype-pattern/
 *
 * This is useful when working with objects that should have access to the same properties.
 */

class Door implements IDoorPrototype {
  public product: PRODUCT.DOOR;
  public type: string;
  public width?: number;
  public height?: number;
  public weight?: number;
  public color?: string;

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

  public getDoor() {
    console.log("\x1b[1;32mPattern 'Prototype' \x1b[0m");
    console.log(
      `New ${this.type} door is constructed! \nParameters: \nwidth - ${this.width}, \nheight - ${this.height}, \nweight - ${this.weight}, \ncolor - ${this.color}`
    );
  }
}

export default Door;
