import { StockItemInterface } from 'interfaces/stock-item';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  stock_item_id: string;
  quantity: number;
  last_updated?: any;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  stock_item?: StockItemInterface;
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  stock_item_id?: string;
  company_id?: string;
  user_id?: string;
}
