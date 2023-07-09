export type GetOrders = {
  id: string | number;
  user_id: 2;
  price?: number;
  total_price: number;
  created_at: number;
  updated_at: number;
  payment_type: string;
  income: number;
  outcome: number;
};

export type AllOrder = {
  summa_begin_month: number;
  summa_end_month: number;
  summa_income: number;
  summa_outcome: number;
};

export type getOrderListType = {
  orderItems: [
    {
      count: number;
      id: number;
      price: number;
      total_price: number;
      product: {
        name: string;
      };
    }
  ];
  created_at: string;
  price: number;
  total_price: number;
};
export type InitialState = {
  ordersList: GetOrders[];
  getAllOrders: Partial<AllOrder>;
  getOrderList: Partial<getOrderListType>;
};
