import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
          setSelectedImg(null);
        }
      }
      
    // modal is having selectedImg prop passed to it up from img grid, to app and down to modal
    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic" />
        </div>

    )
}

export default Modal;