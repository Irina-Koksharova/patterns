import { IDoor } from '../interface';

enum PRODUCT_TYPE {
  WOODEN = 'wooden',
  IRON = 'iron',
}

enum PRODUCT_EXPERT {
  WOODEN = 'wooden doors',
  IRON = 'iron doors',
}

interface IWoodenDoor {
  type: PRODUCT_TYPE.WOODEN;
  getDescription: () => void;
}

interface IWoodenDoorExpert {
  specialization: PRODUCT_EXPERT.WOODEN;
  getDescription: () => void;
}

interface IWoodenDoorFactory {
  getDoor: () => IWoodenDoor;
  getExpert: () => IWoodenDoorExpert;
}

interface IIronDoor {
  type: PRODUCT_TYPE.IRON;
  getDescription: () => void;
}

interface IIronDoorExpert {
  specialization: PRODUCT_EXPERT.IRON;
  getDescription: () => void;
}

interface IIronDoorFactory {
  getDoor: () => IIronDoor;
  getExpert: () => IIronDoorExpert;
}

interface IDoorAbstractFactory {
  type: string;
  getDoorFactory: () => IWoodenDoorFactory | IIronDoorFactory;
}

export {
  PRODUCT_TYPE,
  PRODUCT_EXPERT,
  IWoodenDoor,
  IWoodenDoorExpert,
  IWoodenDoorFactory,
  IIronDoor,
  IIronDoorExpert,
  IIronDoorFactory,
  IDoorAbstractFactory,
};
