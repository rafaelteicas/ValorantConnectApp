import {useToastServiceZustand, useToastZustand} from './useToastZustand';

export function useToast() {
  return useToastZustand();
}

export function useToastService() {
  return useToastServiceZustand();
}
