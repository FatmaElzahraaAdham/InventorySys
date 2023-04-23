import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import SupervisorList from "../components/SupervisorList";
import "../styles/SupervisorStyle.css";
import React from 'react';
import SearchAdd from "../components/SearchAdd";

function Supervisor() {
    
    return (
        <div className="page-content">
            <PageTitle title="Supervisors" subtext="View/Manage"/>
            <div className="supervisor-list-all">                  
                <SearchAdd />
                
                <SupervisorList/>
            </div>
        </div>
    );
}

export default Supervisor;