import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";

const PopupModal = () => {
  const [modal, openModal] = useState(false);
  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={() => openModal(!modal)}>
        <ModalHeader toggle={() => openModal(!modal)}>
          Fill the form
        </ModalHeader>
      </Modal>
    </div>
  );
};

export default PopupModal;
