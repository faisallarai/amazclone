export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  hasPrime?: boolean;
}

interface IOrder {
  id: number;
  domain: string;
  status: string;
  reference: string;
  amount: number;
  gateway_response: string;
  paid_at: string;
  created_at: string;
  channel: string;
  currency: string;
  fees: number;
  paidAt: string;
  requested_amount: number;
  customer: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    customer_code: string;
    phone: string;
  };
  items: IProduct[];
}
