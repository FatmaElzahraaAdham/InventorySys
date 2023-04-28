import {useEffect, useState} from "react";
import PageTitle from "../components/PageTitle";
import TableHeader from "../components/TableHeader";
import Table from "../components/Table";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";

// Due to how the data is structured in the database, it needs to be "fitted" to the format that the Table component expects.
function fitData(data) {
    return data.map((item) => {
        return {
            id: item.request_id,
            date: item.date,
            supervisor: item.supervisor_id,
            product: item.product_id,
            type: item.request_type,
            quantity: item.quantity,
            status: item.status
        }
    }).reverse();
}

function Request() {

    const [requests, setRequests] = useState([]);
    const columns = ['ID', 'Date', 'Supervisor', 'Product', 'Type', 'Quantity', 'Status'];

    useEffect(() => {
        fetch('http://localhost:3000/allRequest', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => setRequests(fitData(data)))
            .catch(error => console.error(error));
    }, []);

    let handleDelete = (item) => {
        console.log("ID#" + item.id + " was denied")
    };

    let handleEdit = (item) => {
        console.log("ID#" + item.id + " was approved")
    };


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
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        editButton={<EditButton/>}
                        editButtonText={"Approve"}
                        deleteButton={<DeleteButton/>}
                        deleteButtonText={"Reject"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Request;