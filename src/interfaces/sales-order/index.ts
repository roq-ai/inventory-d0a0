import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SalesOrderInterface {
  id?: string;
  order_number: string;
  customer_name: string;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface SalesOrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  order_number?: string;
  customer_name?: string;
  company_id?: string;
  user_id?: string;
}
