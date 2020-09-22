import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>Portal Registration Modal</h1>
      <button onClick={() => setShowModal(true)}>Open modal</button>
      <Modal show={showModal}>
        <div
          style={{
            backgroundColor: "#fff",
            height: "300px",
            width: "300px",
            padding: "1rem",
          }}
        >
          <p>I'm in Modal!</p>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
