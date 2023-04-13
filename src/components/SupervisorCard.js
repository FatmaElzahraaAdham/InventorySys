import React from 'react'
import { Link } from 'react-router-dom';
// import {UserOutlined} from '@ant-design/icons';
import "../styles/SupervisorCard.css"
const SupervisorCard = (props) => {
  const activity=(value)=>{
    if(value=="Active"){
      return(
        <h4 style={{color: "green"}}>
          Active
        </h4>
      )
    }
    else if(value=="Inactive"){
      return(
        <h4 style={{color: "red"}}>
          Inactive
        </h4>
      )
    }
  }
  const gender =(value)=>{
    if(value=="man"){
      return(
        <img src='../../images/man.png'></img>
      )
    }
    else if(value=="woman"){
      return(
        <img src='../../images/woman.png'></img>
      )
    }
  }
  return (
    <div className='supervisor_card'>
        <div className='photo'>
        {/* <UserOutlined className='card_photo'/> */}
        {gender(props.gender)}
        </div>
        <div className='card_main_data'>
            
            <div className='card_info'>
                <h3 className='id'>{props.id}</h3>
                <ul>
                    <li>{props.phone}</li>
                    <li> {activity(props.status)}</li>
                    <li>{props.email}</li>
                </ul>
            </div>
            <div className='card_btns'>
            <button className='edit'>
                <Link to={""} >Edit</Link>
             </button>
             <button className='del'>
                <Link to={""} >Delete</Link>
             </button>
            </div>
        </div>
    </div>
  )
  
}


export default SupervisorCard