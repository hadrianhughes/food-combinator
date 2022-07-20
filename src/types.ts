export type Food = {
  name: string;
  icon: string;
  weight?: number;
}

export type FullFood = Required<Food>

export type AppStateEntry = { locked: boolean; food: Food }

export type AppState = {
  vegetable: AppStateEntry;
  carb: AppStateEntry;
  meat: AppStateEntry;
}
