import {create} from 'zustand';

import {ToastService} from './toastTypes';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({toast}),
  hideToast: () => set({toast: null}),
}));

export function useToastZustand(): ToastService['toast'] {
  return useToastStore(set => set.toast);
}

export function useToastServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const showToast = useToastStore(set => set.showToast);
  const hideToast = useToastStore(set => set.hideToast);

  return {
    showToast,
    hideToast,
  };
}
