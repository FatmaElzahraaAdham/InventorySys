import React from 'react';
import '../styles/ProductCard.css';

function ProductCard(props) {
    return (
        <div className="product-card" title={props.description} onClick={() => props.onClick(props.product_id)} >
            <img src={props.photo} alt={props.description} />
            <h2>{props.name}</h2>
            <div className="product-card-subtext">
                <p>Product ID: <b>{props.product_id}</b></p>
                <p>Stock: <b>{props.stock}</b></p>
            </div>
        </div>
    );
}

export default ProductCard;
