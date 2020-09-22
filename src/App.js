import React from "react";
import Modal from "./Modal";

function App() {
  return (
    <>
      <h1>Portal Registration Modal</h1>
      <Modal>
        <div
          style={{
            backgroundColor: "#fff",
            height: "300px",
            width: "300px",
            padding: "1rem",
          }}
        >
          I'm in Modal!
        </div>
      </Modal>
    </>
  );
}

export default App;
