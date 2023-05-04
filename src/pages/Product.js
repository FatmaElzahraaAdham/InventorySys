import "../styles/ProductStyle.css"
import PageTitle from "../components/PageTitle";
import ProductCard from '../components/ProductCard';
import {useEffect, useState} from "react";
import EditProductModal from "../components/EditProductModal";
import SearchAdd from "../components/SearchAdd";
import GeneralModal from "../components/GeneralModal";

const formFields = [
    {label: "Name:", type: "text", name: "name"},
    {label: "Description:", type: "text", name: "description"},
    {label: "Photo:", type: "text", name: "photo"},
    {label: "Stock:", type: "number", name: "stock"}
];

function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [modalTitle, setModalTitle] = useState("");

    useEffect(() => {
        fetch('http://localhost:3000/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }, []);

    function handleProductClick(product) {
        setSelectedProduct(product);
        setModalTitle("Edit Product");
    }

    function handleCloseModal() {
        setSelectedProduct(null);
    }

    function handleAddProduct() {
        setSelectedProduct({
            product_id: null,
            name: "",
            description: "",
            photo: "",
            stock: 0
        });
        setModalTitle("Add Product");
    }

    function handleProductDelete() {
        if(!selectedProduct.product_id) return;
        const url = `http://localhost:3000/product/${selectedProduct.product_id}`;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => {
                    if (response.ok) {
                        window.location.reload();
                    } else {
                        console.error("Failed to delete product");
                    }
                }
            )
            .catch(error => {
                    console.error("Failed to delete product", error);
                }
            );
    }

    function handleSubmitProduct(values) {

        const url = selectedProduct.product_id ? `http://localhost:3000/product/${selectedProduct.product_id}` : "http://localhost:3000/product";
        return fetch(url, {
            method: selectedProduct.product_id ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('sessionID')
            },
            body: JSON.stringify(values)
        })
            .then(response => {
                    if (response.ok) {
                        window.location.reload();
                    } else {
                        console.error("Failed to save product");
                    }
                }
            )
            .catch(error => {
                    console.error("Failed to save product", error);
                }
            );

    }

    return (
        <div className="page-content">
            <PageTitle title="Products" subtext="View/Manage"/>
            <div className="product-wrapper">
                <SearchAdd onAdd={handleAddProduct}/>
                <div className="product-card-container">
                    {products.map(product => (
                        <ProductCard
                            product_id={product.product_id}
                            name={product.name}
                            description={product.description}
                            photo={product.photo}
                            stock={product.stock}
                            onClick={() => handleProductClick(product)}
                        />
                    ))}
                </div>
            </div>
            {selectedProduct && (
                // <EditProductModal product={selectedProduct} onClose={handleCloseModal}/>
                <GeneralModal
                    title={modalTitle}
                    formFields={formFields}
                    initialValues={selectedProduct}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitProduct}
                    onDelete= {selectedProduct.product_id ? handleProductDelete : null}
                />
            )}
        </div>
    );
}


export default Product;