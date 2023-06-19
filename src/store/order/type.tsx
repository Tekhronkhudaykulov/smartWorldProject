export type GetOrders = {
  id: string | number;
  user_id: 2;
  price?: number;
  total_price: number;
  created_at: number;
  updated_at: number;
};

export type InitialState = {
  ordersList: GetOrders[];
};
