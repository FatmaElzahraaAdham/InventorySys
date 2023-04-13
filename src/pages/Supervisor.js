import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import SupervisorList from "../components/SupervisorList";
import "../styles/SupervisorStyle.css";
import React from 'react';


function Supervisor() {
    
    return (
        <div className="page-content">
            <PageTitle title="Supervisors" subtext="View/Manage"/>,
            <div className="supervisor-list-all">                  
                <div className="button">
                    <button className="add-btn">
                        <Link to={""}>ADD </Link>
                    </button>
                </div>
                
                <SupervisorList/>
            </div>
        </div>
    );
}

export default Supervisor;