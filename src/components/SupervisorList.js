import React, {useEffect, useState} from 'react'
import "../styles/SupervisorList.css"
import SupervisorCard from "../components/SupervisorCard";

const SupervisorList = () => {

    const [SupervisorData, setSupervisorData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/supervisor', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => setSupervisorData(data))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className='supervisor_list'>
            {
                SupervisorData.map((item) => {
                        return (
                            <SupervisorCard
                                id={item.id}
                                name={item.name}
                                phone={item.phone}
                                status={item.status}
                                email={item.email}
                                type={item.type}
                                gender={item.gender}
                                password={item.password}
                            />);
                    },
                )
            }
        </div>
    )
}

export default SupervisorList