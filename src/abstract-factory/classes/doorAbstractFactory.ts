import WoodenDoorFactory from './woodenDoor';
import IronDoorFactory from './ironDoor';
import { IDoorAbstractFactory } from '../interface';

/**
 * https://blog.eney.solutions/coding/javascript/javascript-pattern-abstract-factory.html
 *
 * The Abstract Factory design pattern is used when we need to add an additional layer of abstraction
 * over the Factory pattern.
 */

class DoorAbstractFactory implements IDoorAbstractFactory {
  type: string;

  constructor(type: string) {
    this.type = type;
  }

  getDoorFactory() {
    console.log("\x1b[1;32mPattern 'Abstract Factory' \x1b[0m");
    switch (this.type) {
      case 'wooden':
        return new WoodenDoorFactory();
      case 'iron':
        return new IronDoorFactory();
      default:
        console.log('Factory type is not defined!');
        return null;
    }
  }
}

export default DoorAbstractFactory;
