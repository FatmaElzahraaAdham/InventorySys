import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import SupervisorList from "../components/SupervisorList";
import "../styles/SupervisorStyle.css";
import SearchAdd from "../components/SearchAdd";
import GeneralModal from "../components/GeneralModal";

const formFields = [
    { label: "Email:", type: "text", name: "email" },
    { label: "Password:", type: "text", name: "password" },
    { label: "Phone:", type: "text", name: "phone" },
    {
        label: "Status:",
        type: "select",
        name: "status",
        options: [
            { label: "Online", value: "online" },
            { label: "Offline", value: "offline" },
        ],
    },
];

function Supervisor() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleAddSupervisor() {
        setIsModalOpen(true);
    }

    function handleModalSubmit(values) {

        const url = "http://localhost:3000/supervisor";
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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

    return (
        <div className="page-content">
            <PageTitle title="Supervisors" subtext="View/Manage" />
            <div className="supervisor-list-all">
                <SearchAdd onAdd={handleAddSupervisor} />
                <SupervisorList />
            </div>
            {isModalOpen && (
                <GeneralModal
                    title="Add Supervisor"
                    initialValues={{ email: '', password: '', phone: '', status: "online" }}
                    formFields={formFields}
                    onSubmit={handleModalSubmit}
                    onClose={handleModalClose}
                />
            )}
        </div>
    );
}

export default Supervisor;
