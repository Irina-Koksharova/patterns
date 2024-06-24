import Door from './classes/doorPrototype';

export const woodenDoor = new Door('wooden', 800, 2000, 10, 'black').getDoor();
export const ironDoor = new Door('iron', 800, 2000, 50, 'black').getDoor();
