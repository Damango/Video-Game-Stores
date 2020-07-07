import React from 'react';
import "./ItemModal.css"

const ItemModal = (props) => {


    function closeModal() {
        props.closeModal()
    }


    return (

        <div className="modal-overlay" onClick={closeModal}>

            <div className="item-modal-container">
                {props.modalData.name}
            </div>
        </div>);
}

export default ItemModal;