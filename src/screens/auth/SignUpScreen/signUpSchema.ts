import z from 'zod';

// const passwordRegex = /^(.*[A-Z]){1}.*$/;

export const signUpSchemaEmail = z.object({
  email: z.string().email('E-mail inválido'),
});

export const signUpSchemaPassword = z
  .object({
    password: z
      .string()
      .min(8, 'Senha muito curta, sua senha deve ter no mínimo 8 carácteres!'),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'As senhas devem ser iguais',
  });

export const valorantDataSchema = z.object({
  riotId: z.string().min(3),
  tag: z.string().min(3).max(6),
  username: z.string().min(3),
});

export type SignUpSchema = z.infer<
  typeof signUpSchemaEmail | typeof signUpSchemaPassword
>;
