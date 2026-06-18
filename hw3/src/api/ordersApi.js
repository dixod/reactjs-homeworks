const ORDERS = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders';

export async function getOrders() {
  const response = await fetch(ORDERS);

  if (!response.ok) {
    throw new Error(`Failed to load orders (${response.status})`);
  }

  return response.json();
}
