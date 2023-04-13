import React from 'react'
import "../styles/SupervisorList.css"
import SupervisorCard from "../components/SupervisorCard";
export const SupervisorData=[
    {
        id:1,
        name: "mark smith",
        phone : "0111555444",
        status :"Active",
        email:"xxxx@gmail.com",
        type:"",
        gender:"man"
    },
    {
        id:2,
        name: "John Doe",
        phone : "0111555444",
        status :"Active",
        email:"xxxx@gmail.com",
        type:"",
        gender:"man"
    },
    {
        id:3,
        name: "Jane Smith",
        phone : "0111555444",
        status :"Inactive",
        email:"xxxx@gmail.com",
        type:"",
        gender:"woman"
    },
    {
        id:4,
        name: "Bob Johnson",
        phone : "0111555444",
        status :"Active",
        email:"xxxx@gmail.com",
        type:"",
        gender:"man"
    },
]
const SupervisorList = () => {
    const supervisors=SupervisorData;
  return (
    <div className='supervisor_list'>
        {
            supervisors.map((item)=>{
                return (
                <SupervisorCard
                key={item.id} 
                id={item.id}
                name={item.name} 
                phone={item.phone} 
                status={item.status} 
                email={item.email}
                type ={item.type}
                gender={item.gender}
                />);
            },
        )
        }
    </div>
  )
}

export default SupervisorList