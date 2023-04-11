import "../styles/WarehouseStyle.css"
import Table from "../components/Table";
import "../styles/Table.css"
import {useState} from 'react';
import PageTitle from "../components/PageTitle";
import AddWareHouse from "../components/AddWareHouse";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import "../styles/App.css"
import TableHeader from "../components/TableHeader";

function Warehouse() {
    const [warehouses, setWarehouses] = useState([
        {
            id: 1,
            name: 'IT WORKS!',
            location: 'Location 1',
            status: 'Active',
            supervisor: 'John Doe',
        },
        {
            id: 2,
            name: 'Warehouse 2',
            location: 'Location 2',
            status: 'Inactive',
            supervisor: 'Jane Smith',
        },
        {
            id: 3,
            name: 'Warehouse 3',
            location: 'Location 3',
            status: 'Active',
            supervisor: 'Bob Johnson',
        },
    ]);
    const columns = ['ID', 'Name', 'Location', 'Status', 'Supervisor'];

    const [showAddWarehouse, setShowAddWarehouse] = useState(false);

    function newWarehouse(name, location, status, supervisor) {
        const newWarehouse = {
            id: warehouses.length + 1,
            name: name,
            location: location,
            status: status,
            supervisor: supervisor,
        };
        setWarehouses([...warehouses, newWarehouse]);
    }

    let handleDelete = (item) => {
        console.log(item.name + " was deleted")
    };

    let handleEdit = (item) => {
        console.log(item.name + " was edited")
    };

    let handleAdd = () => {
        setShowAddWarehouse(!showAddWarehouse);
    }

    return (
        <div className="page-content">
            <PageTitle title="Warehouse" subtext="View/Manage"/>
            <div className="table-wrapper">
                <TableHeader
                    title="Warehouse List"
                    buttonText="Add Warehouse"
                    onButtonClick={handleAdd}
                    showAddButton={true}
                />
                {showAddWarehouse && <AddWareHouse newWarehouse={newWarehouse}/>}
                <div>
                    <Table
                        data={warehouses}
                        columns={columns}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        editButton={<EditButton/>}
                        deleteButton={<DeleteButton/>}
                    />
                </div>
            </div>
        </div>
    );
}

export default Warehouse;
