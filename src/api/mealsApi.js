const MEALS = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';

export async function getMeals(request = fetch) {
  const response = await request(MEALS);

  if (!response.ok) {
    throw new Error(`Failed to load meals (${response.status})`);
  }

  return response.json();
}
