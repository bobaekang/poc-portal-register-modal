import React, { useState } from "react";
import Modal from "./Modal";
import RegisterForm from "./RegisterForm";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Portal Registration Modal</h1>
        <button onClick={() => setShowModal(true)}>Open modal</button>
      </div>
      <Modal show={showModal}>
        <RegisterForm onClose={() => setShowModal(false)} />
      </Modal>
    </>
  );
}

export default App;
