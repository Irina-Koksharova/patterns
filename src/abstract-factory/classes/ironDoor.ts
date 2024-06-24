import { IIronDoor, PRODUCT_EXPERT, PRODUCT_TYPE } from '../interface';

class IronDoor implements IIronDoor {
  type: PRODUCT_TYPE.IRON;

  constructor() {
    this.type = PRODUCT_TYPE.IRON;
  }

  getDescription() {
    console.log(`Door type: ${this.type}.`);
  }
}

class IronDoorExpert implements IronDoorExpert {
  specialization: PRODUCT_EXPERT.IRON;

  constructor() {
    this.specialization = PRODUCT_EXPERT.IRON;
  }

  getDescription() {
    console.log(`Expert specialization: ${this.specialization}.`);
  }
}

class IronDoorFactory implements IronDoorFactory {
  getDoor() {
    return new IronDoor();
  }

  getExpert() {
    return new IronDoorExpert();
  }
}

export default IronDoorFactory;
