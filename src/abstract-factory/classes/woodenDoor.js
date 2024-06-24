class WoodenDoor {
  constructor() {
    this.type = 'wooden';
  }

  getDescription() {
    console.log(`Door type: ${this.type}.`);
  }
}

class WoodenDoorExpert {
  constructor() {
    this.specialization = 'wooden doors';
  }

  getDescription() {
    console.log(`Expert specialization: ${this.specialization}.`);
  }
}

class WoodenDoorFactory {
  getDoor() {
    return new WoodenDoor();
  }

  getExpert() {
    return new WoodenDoorExpert();
  }
}

export default WoodenDoorFactory;
