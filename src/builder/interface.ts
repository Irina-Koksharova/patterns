import { IDoor } from '../interface';

interface IDoorBuilder extends IDoor {
  setWidth: (width: number) => Partial<IDoorBuilder>;
  setHeight: (height: number) => Partial<IDoorBuilder>;
  setWeight: (weight: number) => Partial<IDoorBuilder>;
  setColor: (color: string) => Partial<IDoorBuilder>;
  getDoor: () => IDoorBuilder;
}

export { IDoorBuilder };
