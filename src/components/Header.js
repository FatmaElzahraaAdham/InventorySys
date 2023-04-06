import { Badge} from "antd";
import {BellFilled,UserOutlined} from '@ant-design/icons';
function Header(){
    return (
        <div className="AppHeader">
   
       <div className="header-right">
       <Badge count={20}>
        <BellFilled style={{fontSize: 24 , cursor:"pointer"}}/>
        </Badge>
        
        <UserOutlined className="icon-header-right"/>
       </div>
        
      
        
        </div>
    )
}

export default Header;