// import {useState} from "react";
// import PageTitle from "../components/PageTitle";
// import TableHeader from "../components/TableHeader";
// import Table from "../components/Table";
// import EditButton from "../components/EditButton";
// import DeleteButton from "../components/DeleteButton";

// function Request() {
//     const [requests] = useState([
//         {
//             id: 1,
//             date: '2022-04-09',
//             supervisor: 'John Doe',
//             product: 'Product A',
//             type: 'Type A',
//             quantity: 10,
//             status: 'Pending',
//         },
//         {
//             id: 2,
//             date: '2022-04-10',
//             supervisor: 'Jane Smith',
//             product: 'Product B',
//             type: 'Type B',
//             quantity: 5,
//             status: 'Approved',
//         },
//         {
//             id: 3,
//             date: '2022-04-11',
//             supervisor: 'Bob Johnson',
//             product: 'Product C',
//             type: 'Type C',
//             quantity: 8,
//             status: 'Rejected',
//         },
//     ]);
//     const columns = ['ID', 'Date', 'Supervisor', 'Product', 'Type', 'Quantity', 'Status'];

//     let handleDelete = (item) => {
//         console.log(item.name + " was deleted")
//     };

//     let handleEdit = (item) => {
//         console.log(item.name + " was edited")
//     };

//     return (
//         <div className="page-content">
//             <PageTitle title="Requests" subtext="View/Manage"/>
//             <div className="table-wrapper">
//                 <TableHeader
//                     title="Requests List"
//                     buttonText="Add Request"
//                     onButtonClick={null}
//                     showAddButton={false}
//                 />
//                 <div>
//                     <Table
//                         data={requests}
//                         columns={columns}
//                         onEdit={handleEdit}
//                         onDelete={handleDelete}
//                         editButton={<EditButton/>}
//                         deleteButton={<DeleteButton/>}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Request;