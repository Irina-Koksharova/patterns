import DoorFactory from './classes/doorFactory';

export const woodenDoor = new DoorFactory(
  'wooden',
  800,
  2000,
  10,
  'black'
).getDescription();

export const ironDoor = new DoorFactory(
  'iron',
  800,
  2000,
  50,
  'black'
).getDescription();
