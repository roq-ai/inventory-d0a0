const mapping: Record<string, string> = {
  companies: 'company',
  inventories: 'inventory',
  'purchase-orders': 'purchase_order',
  'sales-orders': 'sales_order',
  'stock-items': 'stock_item',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
