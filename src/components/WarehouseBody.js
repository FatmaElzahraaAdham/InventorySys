import React from 'react';
 import {UserOutlined} from '@ant-design/icons';
const WarehouseBody = (props) => {
    const activity=(value)=>{
        if(value=="Active"){
          return(
            <h4 className='activee'>
              Active
            </h4>
          )
        }
        else if(value=="Inactive"){
          return(
            <h4 className='inactivee'>
              Inactive
            </h4>
          )
        }
      }
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.location}</td>
            <td>
                <div className="state-container">
                    {activity(props.status)}
                </div>
            </td>
            <td><UserOutlined className='user_warehouse'/>  {props.supervisor}</td>
            <td>
                <div className='btns-container'>
                    <button className="edit_btn">Edit</button>
                    <button className="del_btn">Delete</button>
                </div>
            </td>
        </tr>
        
    );
};

export default WarehouseBody;
