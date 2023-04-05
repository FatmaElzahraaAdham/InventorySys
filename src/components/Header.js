import { Badge, Image ,Space} from "antd";
import {BellFilled,UserOutlined} from '@ant-design/icons';
function Header(){
    return (
        <div className="AppHeader">
        <Image width={40} src="/images/logo.png"></Image>
        <Space className="icons-header">
        <Badge count={20}>
        <BellFilled style={{fontSize: 24}}/>
        </Badge>
        
        <UserOutlined style={{fontSize: 24}}/>
        </Space>
        
        </div>
    )
}

export default Header;