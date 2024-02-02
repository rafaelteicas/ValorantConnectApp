import {create} from 'zustand';

import {ModalService} from './modalTypes';

export const useModal = create<ModalService>(set => ({
  modal: null,
  showModal: modal => set({modal: modal}),
  hideModal: () => set({modal: null}),
}));
