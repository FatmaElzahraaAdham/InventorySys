import "../styles/ProductStyle.css"
import PageTitle from "../components/PageTitle";
import ProductCard from '../components/ProductCard';
import {useEffect, useState} from "react";
import SearchAdd from "../components/SearchAdd";
import GeneralModal from "../components/GeneralModal";

const formFields = [
    {label: "Name:", type: "text", name: "name"},
    {label: "Supervisor:", type: "text", name: "supervisor_id"},
    {
        label: "Product ID:",
        type: "select",
        name: "product_id",
        options: [],
    },
    {label: "Stock:", type: "number", name: "stock"},
];

function ProductAssignment() {
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [warehouse, setWarehouse] = useState([]);
    const [modalTitle, setModalTitle] = useState("");
    const [productIds, setProductIds] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/warehouse', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => setWarehouse(data))
            .catch(error => console.error(error));

        fetch('http://localhost:3000/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => {
                const options = data.map(product => ({label: product.product_id, value: product.product_id}));
                setProductIds(options);
            })
            .catch(error => console.error(error));
    }, []);

    function handleProductClick(warehouse) {
        setSelectedWarehouse(warehouse);
        console.log(warehouse)
        setModalTitle("Assign");
    }

    function handleCloseModal() {
        setSelectedWarehouse(null);
    }

    function handleSubmitProduct(values) {

        console.log(values)
        fetch(`http://localhost:3000/warehouse/assignProductToWarehouse`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('sessionID')
            },
            body: JSON.stringify({
                product_id: values.product_id,
                warehouse_stock: values.stock,
                warehouse_id: selectedWarehouse.warehouse_id
            })
        }).then(response => {
            if (response.ok) {
                window.location.reload();
            } else {
                console.error("Failed to save product");
            }
        })
    }

    // set the product id options for the form fields
    formFields.find(field => field.name === 'product_id').options = productIds;

    return (
        <div className="page-content">
            <PageTitle title="Assign to warehouse" subtext="View/Manage"/>
            <div className="product-wrapper">
                <SearchAdd/>
                <div className="product-card-container">
                    {warehouse.map(warehouse => (
                        <ProductCard
                            name={warehouse.name}
                            photo="http://127.0.0.1:8080/warehouse.png"
                            onClick={() => handleProductClick(warehouse)}
                        />
                    ))}
                </div>
            </div>
            {selectedWarehouse && (
                <GeneralModal
                    title={modalTitle}
                    formFields={formFields}
                    initialValues={selectedWarehouse}
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitProduct}
                />
            )}
        </div>
    );
}


export default ProductAssignment;