export interface Toast {
  message: string;
  type?: 'success' | 'error' | 'warning';
  duration?: number;
}

export interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hideToast: () => void;
}
