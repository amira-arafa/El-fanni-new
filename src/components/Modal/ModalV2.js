import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./Modal.scss";

const ModalComponentV2 = ({
  wrapperClass,
  modalBody,
  open,
  onCloseModal,
  className,
}) => {
  return (
    <div className={wrapperClass}>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: className,
        }}
      >
        {modalBody}
      </Modal>
    </div>
  );
};

export default ModalComponent;
