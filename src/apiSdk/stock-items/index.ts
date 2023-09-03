import axios from 'axios';
import queryString from 'query-string';
import { StockItemInterface, StockItemGetQueryInterface } from 'interfaces/stock-item';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getStockItems = async (
  query?: StockItemGetQueryInterface,
): Promise<PaginatedInterface<StockItemInterface>> => {
  const response = await axios.get('/api/stock-items', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createStockItem = async (stockItem: StockItemInterface) => {
  const response = await axios.post('/api/stock-items', stockItem);
  return response.data;
};

export const updateStockItemById = async (id: string, stockItem: StockItemInterface) => {
  const response = await axios.put(`/api/stock-items/${id}`, stockItem);
  return response.data;
};

export const getStockItemById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/stock-items/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteStockItemById = async (id: string) => {
  const response = await axios.delete(`/api/stock-items/${id}`);
  return response.data;
};
