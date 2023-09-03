import * as yup from 'yup';

export const stockItemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  initial_quantity: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
