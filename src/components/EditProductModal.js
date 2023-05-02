import {useState} from "react";
import React from 'react';
import "../styles/EditProductModal.css"

function EditProductModal({ product, onClose }) {
    // Define the form fields and their initial values here
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [photo, setPhoto] = useState(product.photo);
    const [stock, setStock] = useState(product.stock);

    // Handle the form submission here
    async function handleSubmit(event) {
        event.preventDefault();
        const updatedProduct = {
            ...product,
            name,
            description,
            photo,
            stock: parseInt(stock)
        };

        if(product.product_id != null) {
            const response = await fetch(`http://localhost:3000/updateProduct/${product.product_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': localStorage.getItem('sessionID')
                },
                body: JSON.stringify(updatedProduct)
            });
            if (response.ok) {
                onClose();
                window.location.reload();
            } else {
                console.error("Failed to update product");
            }
        }
        else {
            const response = await fetch(`http://localhost:3000/addProduct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': localStorage.getItem('sessionID')
                },
                body: JSON.stringify(updatedProduct)
            });
            if (response.ok) {
                onClose();
                window.location.reload();
            } else {
                console.error("Failed to add product");
            }
        }
    }


    return (
        <div className="product-modal">
            <div className="product-modal-content">
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Description:
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <label>
                        Photo URL:
                        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                    </label>
                    <label>
                        Stock:
                        <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />
                    </label>
                    <div className="product-modal-actions">
                        <button className="save" type="submit">Save</button>
                        <button className="cancel" type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProductModal;
