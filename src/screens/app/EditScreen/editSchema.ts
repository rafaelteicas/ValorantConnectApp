import {z} from 'zod';

export function editSchema(fieldName: string) {
  if (fieldName === 'E-mail') {
    return editEmailSchema;
  }
  if (fieldName === 'Senha') {
    return editSchemaPassword;
  }
}
const editEmailSchema = z.object({
  field: z.string().email('E-mail inválido'),
});

export const editSchemaPassword = z
  .object({
    field: z
      .string()
      .min(8, 'Senha muito curta, sua senha deve ter no mínimo 8 carácteres!'),
    confirmPassword: z.string(),
  })
  .refine(data => data.field === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
  });
