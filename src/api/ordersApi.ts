import type { FetchRequest, Order } from '../types';

const ORDERS = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/orders';

export async function getOrders(request: FetchRequest = fetch): Promise<Order[]> {
  const response = await request(ORDERS);

  if (!response.ok) {
    throw new Error(`Failed to load orders (${response.status})`);
  }

  return response.json() as Promise<Order[]>;
}
