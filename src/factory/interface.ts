import { IDoor } from '../interface';

interface IDoorFactory extends IDoor {
  getDescription: () => void;
}

export { IDoorFactory };
