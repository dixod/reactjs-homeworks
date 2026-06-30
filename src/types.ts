export type AppUser = {
  email: string | null;
  uid: string;
};

export type FetchRequest = (url: string, options?: RequestInit) => Promise<Response>;

export type Meal = {
  id: string;
  meal: string;
  category: string;
  price: string | number;
  img: string;
  instructions?: string;
};

export type Order = {
  id?: string;
} & Record<string, unknown>;

export type ApiLog = {
  url: string;
  body: BodyInit | null;
  status: number;
  createdAt: string;
};
