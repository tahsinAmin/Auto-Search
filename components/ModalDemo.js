import { useState } from "react";
import Modal from "react-modal";

export default function ModalDemo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        customStyles={{
          overlay: {
            backgroundColor: "gray",
          },
          content: {
            color: "blue",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Modal Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iste
          soluta veniam tempore repellat accusantium dolorem ratione, inventore
          optio id?
        </p>
        <button onClick={() => setModalIsOpen(false)}>Close modal</button>
      </Modal>
    </div>
  );
}
