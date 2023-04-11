import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from './Form'
function AddWareHouse(props) {
    const [show, setShow] = useState(props);

    const handleClose = () => setShow(false);

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Warehouse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form/>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="add-btn"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="add-btn"
                        onClick={handleClose}
                        form="editmodal"
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddWareHouse;
