enum PRODUCT {
  DOOR = 'door',
}

interface IProduct {
  product: string;
}

interface IDoor extends IProduct {
  type: string;
  width?: number;
  height?: number;
  weight?: number;
  color?: string;
}

interface IDoorBuilder extends IDoor {
  setWidth: (width: number) => Partial<IDoorBuilder>;
  setHeight: (height: number) => Partial<IDoorBuilder>;
  setWeight: (weight: number) => Partial<IDoorBuilder>;
  setColor: (color: string) => Partial<IDoorBuilder>;
  getDoor: () => IDoorBuilder;
}

export { PRODUCT, IDoorBuilder };
