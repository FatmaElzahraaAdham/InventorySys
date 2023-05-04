import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import GeneralModal from './GeneralModal';

const formFields = [
    {
        label: 'Name',
        type: 'text',
        name: 'name',
    },
    {
        label: 'Location',
        type: 'text',
        name: 'location',
    },
    {
        label: 'Status',
        type: 'select',
        name: 'status',
        options: [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
        ],
    },
    {
        label: 'Supervisor',
        type: 'text',
        name: 'supervisor',
    },
];
const WarehouseBody = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [values, setValues] = useState({
        name: props.name,
        location: props.location,
        status: props.status,
        supervisor: props.supervisor,
    });

    const activity = (value) => {
        if (value === 'active') {
            return <h4 className='activee'>Active</h4>;
        } else if (value === 'inactive') {
            return <h4 className='inactivee'>Inactive</h4>;
        }
    };

    function handleEdit() {
        setIsModalOpen(true);
    }

    function handleDelete() {
        return fetch(`http://localhost:3000/warehouse/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('sessionID'),
            },
        })
            .then((response) => {
                if (response.ok) {
                    window.location.reload();
                } else {
                    console.error('Failed to delete warehouse');
                }
            })
            .catch((error) => {
                console.error('Failed to delete warehouse', error);
            });
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    function handleSaveModal(newValues) {
        console.log('New values:', newValues);
        setIsModalOpen(false);
    }


    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.location}</td>
                <td>
                    <div className='state-container'>{activity(props.status)}</div>
                </td>
                <td>
                    <UserOutlined className='user_warehouse' /> {props.supervisor}
                </td>
                <td>
                    <div className='btns-container'>
                        <button className='edit_btn' onClick={handleEdit}>
                            Edit
                        </button>
                        <button className='del_btn' onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
            {isModalOpen && (
                <GeneralModal
                    title='Edit Warehouse'
                    initialValues={values}
                    formFields={formFields}
                    onSubmit={handleSaveModal}
                    onClose={handleCloseModal}
                    onDelete={handleDelete}
                />
            )}
        </>
    );
};

export default WarehouseBody;
