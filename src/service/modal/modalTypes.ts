import React from 'react';

export interface ModalService {
  modal: React.ReactNode;
  showModal: (modal: React.ReactNode) => void;
  hideModal: () => void;
}
