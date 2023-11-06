import React, {createContext, useState} from 'react';

import {Toast, ToastService} from '../toastTypes';

export const ToastContext = createContext<ToastService>({
  toast: null,
  hideToast: () => {},
  showToast: () => {},
});

export function ToastProvider(children: React.ReactNode) {
  const [toast, setToast] = useState<Toast | null>(null);

  function showToast(_toast: Toast) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider value={{hideToast, showToast, toast}}>
      {children}
    </ToastContext.Provider>
  );
}
