import type { Meal } from '../types';

const MEALS_URL = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';

export async function getMeals(): Promise<Meal[]> {
  const response = await fetch(MEALS_URL);

  if (!response.ok) {
    throw new Error(`Failed to load meals (${response.status})`);
  }

  return response.json();
}
