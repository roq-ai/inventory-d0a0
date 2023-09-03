import * as yup from 'yup';

export const salesOrderValidationSchema = yup.object().shape({
  order_number: yup.string().required(),
  customer_name: yup.string().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
