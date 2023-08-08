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
  id: number;
  created_at: string;
  created_time: string;
  orderItems: [
    {
      count: number;
      id: number;
      price: number;
      total_price: number;
      amount: number;
      product: {
        name: string;
      };
    }
  ];
  user: {
    balance: number;
    full_name: string;
    limit_summa: number;
    id: number;
  };
  shop: {
    name: string;
  };
  price: number;
  total_price: number;
};
export type InitialState = {
  ordersList: GetOrders[];
  getAllOrders: Partial<AllOrder>;
  getOrderList: Partial<getOrderListType>;
  toast: boolean;
};
