export interface ModalService {
  modal: string | null;
  showModal: (modal: string) => void;
  hideModal: () => void;
  modalType?: 'success' | 'error';
}
