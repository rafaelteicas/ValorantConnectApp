import {zodResolver} from '@hookform/resolvers/zod';
import {DefaultValues, useForm} from 'react-hook-form';

type FieldValues = Record<string, any>;

export function useAppForm<TFieldValues extends FieldValues>(
  defaultValues: DefaultValues<TFieldValues>,
  resolver?: any,
) {
  const {control, formState, handleSubmit, getValues} = useForm({
    resolver: resolver ? zodResolver(resolver) : undefined,
    defaultValues: defaultValues,
    mode: 'onChange',
  });

  return {
    control,
    formState,
    handleSubmit,
    getValues,
  };
}
