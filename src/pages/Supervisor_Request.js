import PageTitle from "../components/PageTitle";
import {useEffect, useState} from "react";
import TableHeader from "../components/TableHeader";
import Table from "../components/Table";

function fitData(data) {
    return data.map((item) => {
        return {
            id: item.request_id,
            date: item.date,
            product: item.product_id,
            type: item.request_type,
            quantity: item.quantity,
            status: item.status
        }
    }).reverse();
}
function Supervisor_Request() {

    const [requests, setRequests] = useState([]);
    const columns = ['ID', 'Date', 'Product', 'Type', 'Quantity', 'Status'];

    useEffect(() => {
        fetch(`http://localhost:3000/supervisor/getRequests/${localStorage.getItem('sessionID')}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => setRequests(fitData(data)))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className="page-content">
            <PageTitle title="Requests" subtext="View/Manage"/>
            <div className="table-wrapper">
                <TableHeader
                    title="Requests List"
                    buttonText="Add Request"
                    onButtonClick={null}
                    showAddButton={false}
                />
                <div>
                    <Table
                        data={requests}
                        columns={columns}
                    />
                </div>
            </div>
        </div>
    );
}


export default Supervisor_Request;