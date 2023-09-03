import { InventoryInterface } from 'interfaces/inventory';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface StockItemInterface {
  id?: string;
  name: string;
  description?: string;
  initial_quantity: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  company?: CompanyInterface;
  _count?: {
    inventory?: number;
  };
}

export interface StockItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
