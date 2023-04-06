import React from "react";

const EditForm = ({ isOpen, onClose, children, studentId }) => {
  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
    backgroundColor: "#fff",
    padding: "2rem",
    zIndex: 9999,
    display: isOpen ? "block" : "none",
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: isOpen ? "block" : "none",
  };
  return (
    <>
      <div style={modalStyles}>
        {studentId}
        <button onClick={onClose}>Close EditForm</button>
      </div>
      <div style={overlayStyles} onClick={onClose}></div>
    </>
  );
};

export default EditForm;
