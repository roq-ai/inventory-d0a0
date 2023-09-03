import { InventoryInterface } from 'interfaces/inventory';
import { PurchaseOrderInterface } from 'interfaces/purchase-order';
import { SalesOrderInterface } from 'interfaces/sales-order';
import { StockItemInterface } from 'interfaces/stock-item';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  inventory?: InventoryInterface[];
  purchase_order?: PurchaseOrderInterface[];
  sales_order?: SalesOrderInterface[];
  stock_item?: StockItemInterface[];
  user?: UserInterface;
  _count?: {
    inventory?: number;
    purchase_order?: number;
    sales_order?: number;
    stock_item?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
