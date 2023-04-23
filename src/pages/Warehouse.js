import "../styles/WarehouseStyle.css"
import WarehouseTable from "../components/WarehouseTable";
import "../styles/WarehouseTable.css"
import PageTitle from "../components/PageTitle";
import SearchAdd from "../components/SearchAdd";

const warehouses = [
    {
        id: 1,
        name: 'Warehouse 1',
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
];

function Warehouse() {
    return (
        <div className="page-content">
            <PageTitle title="Warehouse" subtext="View/Manage"/>
            <div className="warehouse-table-block">
                <SearchAdd />
                <WarehouseTable warehouses={warehouses} />
            </div>
        </div>
    );
}

export default Warehouse;