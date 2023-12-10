import {create} from 'zustand';

import {ModalService} from './modalTypes';

export const useModal = create<ModalService>(set => ({
  modal: null,
  showModal: modalComponent => set({modal: modalComponent}),
  hideModal: () => set({modal: null}),
}));
