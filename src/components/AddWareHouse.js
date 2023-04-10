import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import Form from './Form'
function AddWareHouse(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                className="add-btn"
            >
                Add
            </button>

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
