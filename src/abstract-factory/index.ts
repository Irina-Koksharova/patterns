import DoorAbstractFactory from './classes/doorAbstractFactory';

export const woodenDoorFactory = new DoorAbstractFactory(
  'wooden'
).getDoorFactory();
woodenDoorFactory.getDoor().getDescription();
woodenDoorFactory.getExpert().getDescription();

export const ironDoorFactory = new DoorAbstractFactory('iron').getDoorFactory();
ironDoorFactory.getDoor().getDescription();
ironDoorFactory.getExpert().getDescription();
