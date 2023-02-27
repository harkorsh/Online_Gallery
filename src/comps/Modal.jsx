import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const closeImg = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedImg(null);
  };

  return (
    <div className="backdrop" onClick={closeImg}>
      <img src={selectedImg} alt="Full View" />
    </div>
  );
};

export default Modal;
