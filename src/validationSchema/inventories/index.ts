import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  last_updated: yup.date().required(),
  stock_item_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
