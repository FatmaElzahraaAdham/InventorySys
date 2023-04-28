import "../styles/ProductStyle.css"
import PageTitle from "../components/PageTitle";
import ProductCard from '../components/ProductCard';
import {useEffect, useState} from "react";
import EditProductModal from "../components/EditProductModal";
import SearchAdd from "../components/SearchAdd";


function Product() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/getProducts', {
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
        console.log(`Product ${product.product_id} clicked`);
        setSelectedProduct(product);
    }

    function handleCloseModal() {
        setSelectedProduct(null);
    }

    return (
        <div className="page-content">
            <PageTitle title="Products" subtext="View/Manage"/>
            <div className="product-wrapper">
                <SearchAdd/>
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
                <EditProductModal product={selectedProduct} onClose={handleCloseModal}/>
            )}
        </div>
    );
}


export default Product;