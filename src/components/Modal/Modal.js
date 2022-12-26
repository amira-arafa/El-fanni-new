import React, { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./Modal.scss"

const ModalComponent = ({ children , modalBody, open, onOpenModal, onCloseModal  }) => {
 
  return (
    <div>
   <div>
      <div onClick={onOpenModal}>{children}</div>
      <Modal open={open} onClose={onCloseModal} center>
       {modalBody}
      </Modal>
    </div>
    </div>
  );
};

export default ModalComponent;
