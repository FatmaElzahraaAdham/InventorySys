import { Badge } from "antd";
import { BellFilled, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Header() {
    const requestPage = localStorage.getItem("sessionID") == 1 ? "/Request" : "/Supervisor/Requests";
    return (
        <div className="AppHeader">
            <div className="header-right">
                <Link to={requestPage}>
                    <Badge count={20}>
                        <BellFilled style={{ fontSize: 24, cursor: "pointer" }} />
                    </Badge>
                </Link>
                <UserOutlined className="icon-header-right" aria-label="User Icon" />
            </div>
        </div>
    );
}

export default Header;
