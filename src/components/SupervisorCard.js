import React, {useState} from 'react'
import "../styles/SupervisorCard.css"
import GeneralModal from "./GeneralModal";

const formFields = [
    {label: "Email:", type: "text", name: "email"},
    {label: "Password:", type: "text", name: "password"},
    {label: "Phone:", type: "text", name: "phone"},
    {
        label: "Status:",
        type: "select",
        name: "status",
        options: [
            {label: "Online", value: "online"},
            {label: "Offline", value: "offline"},
        ],
    },
];
const SupervisorCard = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const activity = (value) => {
        if (value === "online") {
            return (
                <h4 style={{color: "green"}}>
                    Active
                </h4>
            )
        } else if (value === "offline") {
            return (
                <h4 style={{color: "red"}}>
                    Inactive
                </h4>
            )
        }
    }
    const gender = (value) => {
        if (value === "man" || value == null) {
            return (
                <img src='../../images/man.png'></img>
            )
        } else if (value === "woman") {
            return (
                <img src='../../images/woman.png'></img>
            )
        }
    }

    function handleAddSupervisor() {
        setIsModalOpen(true);
    }

    function handleModalSubmit(values) {
        return fetch(`http://localhost:3000/supervisor/${props.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
            body: JSON.stringify(values)
        })
            .then(response => {
                if (response.ok) {
                    setIsModalOpen(false);
                    window.location.reload();
                } else {
                    console.error("Failed to save supervisor");
                }
            })
            .catch(error => {
                console.error("Failed to save supervisor", error);
            });
    }

    function handleModalClose() {
        setIsModalOpen(false);
    }

    function handleDeleteSupervisor() {
        return fetch(`http://localhost:3000/supervisor/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => {
                if (response.ok) {
                    window.location.reload();
                } else {
                    console.error("Failed to delete supervisor");
                }
            })
            .catch(error => {
                console.error("Failed to delete supervisor", error);
            });
    }

    return (
        <div className='supervisor_card'>
            <div className='supervisor_card_1'>
                <div className='photo'>
                    {/* <UserOutlined className='card_photo'/> */}
                    {gender(props.gender)}
                </div>
                <div className='card_main_data'>

                    <div className='card_info'>
                        <h3 className='id'>ID#{props.id}</h3>
                        <ul>
                            <li>{props.phone}</li>
                            <li> {activity(props.status)}</li>
                            <li>{props.email}</li>
                        </ul>
                    </div>
                    <div className='card_btns'>
                        <button className='edit' onClick={handleAddSupervisor}>
                            Edit
                        </button>
                        <button className='del' onClick={handleDeleteSupervisor}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <GeneralModal
                    title="Add Supervisor"
                    initialValues={props}
                    formFields={formFields}
                    onSubmit={handleModalSubmit}
                    onClose={handleModalClose}
                />
            )}
        </div>
    )

}


export default SupervisorCard