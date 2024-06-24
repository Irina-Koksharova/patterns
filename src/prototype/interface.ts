import { IDoor } from '../interface';

interface IDoorPrototype extends IDoor {
  getDoor: () => void;
}

export { IDoorPrototype };
