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

export { PRODUCT, IDoor };
