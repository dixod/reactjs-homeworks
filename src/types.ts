export type Meal = {
  id: string;
  meal: string;
  category: string;
  price: string | number;
  img: string;
  instructions?: string;
};

export type CartItem = {
  meal: Meal;
  quantity: number;
};
