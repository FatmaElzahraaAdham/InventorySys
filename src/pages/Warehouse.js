import { useState, useEffect } from 'react';
import "../styles/WarehouseStyle.css"
import WarehouseTable from "../components/WarehouseTable";
import "../styles/WarehouseTable.css"
import PageTitle from "../components/PageTitle";
import SearchAdd from "../components/SearchAdd";
import GeneralModal from "../components/GeneralModal";

const initialValues = {
    name: "",
    location: "",
    status: "inactive",
    supervisorID: ""
};

const formFields = [
    { label: "Name:", type: "text", name: "name" },
    { label: "Location:", type: "text", name: "location" },
    {
        label: "Status:",
        type: "select",
        name: "status",
        options: [
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
        ],
    },
    { label: "Supervisor ID:", type: "number", name: "supervisorID" }
];

function handleWarehouseSubmit(warehouse) {
    const url = warehouse.id ? `http://localhost:3000/warehouse/${warehouse.id}` : "http://localhost:3000/warehouse";
    return fetch(url, {
        method: warehouse.id ? "PUT" : "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': localStorage.getItem('sessionID')
        },
        body: JSON.stringify(warehouse)
    })
        .then(response => {
            if (response.ok) {
                window.location.reload();
            } else {
                console.error("Failed to save warehouse");
            }
        })
        .catch(error => {
            console.error("Failed to save warehouse", error);
        });
}

function Warehouse() {
    const [warehouses, setWarehouses] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/warehouse', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => setWarehouses(data))
            .catch(error => console.error(error));
    }, []);

    const handleAddWarehouse = () => {
        setShowAddModal(true);
    }

    const handleCloseModal = () => {
        setShowAddModal(false);
    }

    const handleAddWarehouseSubmit = (values) => {
        const newWarehouse = {
            name: values.name,
            location: values.location,
            status: values.status,
            supervisor_id: values.supervisorID
        };

        handleWarehouseSubmit(newWarehouse).then(r => console.log(r));
        setShowAddModal(false);
    }

    let handleEdit = (item) => {
        console.log("edit" + item);
    }

    let handleDelete = (item) => {
        console.log("delete" + item);
    }
    return (
        <div className="page-content">
            <PageTitle title="Warehouse" subtext="View/Manage"/>
            <div className="warehouse-table-block">
                <SearchAdd onAdd={handleAddWarehouse}/>
                <WarehouseTable warehouses={warehouses} />
                {showAddModal &&
                    <GeneralModal
                        title="Add Warehouse"
                        formFields={formFields}
                        initialValues={initialValues}
                        onClose={handleCloseModal}
                        onSubmit={handleAddWarehouseSubmit}
                    />
                }
            </div>
        </div>
    );
}

export default Warehouse;
