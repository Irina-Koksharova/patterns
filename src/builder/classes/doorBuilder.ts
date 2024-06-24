import { PRODUCT } from '../../interface';
import { IDoorBuilder } from '../interface';

/**
 * https://refactoring.guru/design-patterns/builder
 *
 * This is useful when creating complex composite trees because we can program its construction steps to work recursively.
 */

class DoorBuilder implements IDoorBuilder {
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

  public setWidth(width: number) {
    this.width = width;
    return this;
  }

  public setHeight(height: number) {
    this.height = height;
    return this;
  }

  public setWeight(weight: number) {
    this.weight = weight;
    return this;
  }

  public setColor(color: string) {
    this.color = color;
    return this;
  }

  public getDoor() {
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
