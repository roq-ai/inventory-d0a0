import axios from 'axios';
import queryString from 'query-string';
import { SalesOrderInterface, SalesOrderGetQueryInterface } from 'interfaces/sales-order';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getSalesOrders = async (
  query?: SalesOrderGetQueryInterface,
): Promise<PaginatedInterface<SalesOrderInterface>> => {
  const response = await axios.get('/api/sales-orders', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createSalesOrder = async (salesOrder: SalesOrderInterface) => {
  const response = await axios.post('/api/sales-orders', salesOrder);
  return response.data;
};

export const updateSalesOrderById = async (id: string, salesOrder: SalesOrderInterface) => {
  const response = await axios.put(`/api/sales-orders/${id}`, salesOrder);
  return response.data;
};

export const getSalesOrderById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/sales-orders/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteSalesOrderById = async (id: string) => {
  const response = await axios.delete(`/api/sales-orders/${id}`);
  return response.data;
};
