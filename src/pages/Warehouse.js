import "../styles/WarehouseStyle.css"
import WarehouseTable from "../components/WarehouseTable";
import "../styles/WarehouseTable.css"
import PageTitle from "../components/PageTitle";

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
                    <div className="table_search_add">
                        <button className="Add_btn">ADD</button>
                        <div className="searchBar_logo">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search"
                        />
                        <div className="logo">
                         <button className="logo_image">
                         <img src="../../images/search.png" alt=""></img>
                         </button>
                        </div>
                        </div>

                </div>
                <WarehouseTable warehouses={warehouses} />
            </div>
        </div>
    );
}

export default Warehouse;