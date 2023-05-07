import "../styles/ProductStyle.css"
import PageTitle from "../components/PageTitle";
import SearchAdd from "../components/SearchAdd";
import ProductCard from "../components/ProductCard";
import GeneralModal from "../components/GeneralModal";
import {useEffect, useState} from "react";

const formFields = [
    {label: "Stock:", type: "number", name: "new_stock"}
];
function Supervisor_product() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [modalTitle, setModalTitle] = useState("");

    useEffect(() => {
        const warehouse_id = localStorage.getItem('warehouse_id');
        if (warehouse_id) {
            fetch(`http://localhost:3000/supervisor/products/${warehouse_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error(error));
        }
    }, []);

    function handleProductClick(product) {
        setSelectedProduct(product);
        setModalTitle("Request stock");
    }

    function handleCloseModal() {
        setSelectedProduct(null);
    }

    const handleSubmitProduct = (values) => {
        const data = {
            user_id: localStorage.getItem('sessionID'),
            product_id: values.product_id,
            quantity: Math.abs(values.new_stock),
            request_type: values.new_stock > 0 ? "increment" : "decrement"
        }
        console.log(data);
        // send stock request
        fetch('http://localhost:3000/supervisor/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(reqData => console.log(reqData))
            .catch(error => console.error(error));
    }



    return (
        <div className="page-content">
            <PageTitle title="Products" subtext="View/Manage"/>
            <div className="product-wrapper">
                <SearchAdd />
                <div className="product-card-container">
                    {products.map(product => (
                        <ProductCard
                            product_id={product.product_id}
                            name={product.name}
                            description={product.description}
                            photo={product.photo}
                            stock={product.warehouse_stock}
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
                />
            )}
        </div>
    );
}


export default Supervisor_product;