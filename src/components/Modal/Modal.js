import React, { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./Modal.scss"

const ModalComponent = ({ wrapperClass, children, modalBody, open, onOpenModal, onCloseModal, className }) => {

  return (
    <div className={wrapperClass}>
      <div onClick={onOpenModal}>{children}</div>
      <Modal open={open} onClose={onCloseModal} center classNames={{
        modal: className
      }}>
        {modalBody}
      </Modal>
    </div>
  );
};

export default ModalComponent;
