import {
  IWoodenDoor,
  IWoodenDoorExpert,
  IWoodenDoorFactory,
  PRODUCT_EXPERT,
  PRODUCT_TYPE,
} from '../interface';

class WoodenDoor implements IWoodenDoor {
  type: PRODUCT_TYPE.WOODEN;

  constructor() {
    this.type = PRODUCT_TYPE.WOODEN;
  }

  getDescription() {
    console.log(`Door type: ${this.type}.`);
  }
}

class WoodenDoorExpert implements IWoodenDoorExpert {
  specialization: PRODUCT_EXPERT.WOODEN;

  constructor() {
    this.specialization = PRODUCT_EXPERT.WOODEN;
  }

  getDescription() {
    console.log(`Expert specialization: ${this.specialization}.`);
  }
}

class WoodenDoorFactory implements IWoodenDoorFactory {
  getDoor() {
    return new WoodenDoor();
  }

  getExpert() {
    return new WoodenDoorExpert();
  }
}

export default WoodenDoorFactory;
