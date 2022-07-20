export type Food = {
  name: string;
  icon: string;
  weight?: number;
}

export type FullFood = Required<Food>
