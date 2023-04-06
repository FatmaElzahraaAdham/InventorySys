
import "../styles/DashboardStyle.css"
import PageTitle from "../components/PageTitle";
import Activity from "../components/Activity";
function Dashboard() {
    return (
        <div className="page-content">
            <PageTitle title="Dashboard" subtext="Home/Summary"/>
            <div className="small-activity">
                <Activity title="Activity Name"/>
            </div>
        </div>

       
    );
}



export default Dashboard;