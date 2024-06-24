class IronDoor {
  constructor() {
    this.type = 'iron';
  }

  getDescription() {
    console.log(`Door type: ${this.type}.`);
  }
}

class IronDoorExpert {
  constructor() {
    this.specialization = 'iron doors';
  }

  getDescription() {
    console.log(`Expert specialization: ${this.specialization}.`);
  }
}

class IronDoorFactory {
  getDoor() {
    return new IronDoor();
  }

  getExpert() {
    return new IronDoorExpert();
  }
}

export default IronDoorFactory;
