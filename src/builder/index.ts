import DoorBuilder from './classes/doorBuilder';

export const woodenDoor = new DoorBuilder('wooden')
  .setHeight(2000)
  .setWidth(800)
  .setWeight(10)
  .setColor('black')
  .getDoor();

export const ironDoor = new DoorBuilder('iron')
  .setWidth(800)
  .setHeight(2000)
  .setWeight(50)
  .setColor('black')
  .getDoor();
