
import "../styles/DashboardStyle.css"
import PageTitle from "../components/PageTitle";
import Activity from "../components/Activity";


const activityList = [
    {
        id: 1,
        title: "Activity Name 1",
        cardsData: [
            { id: 1, image: "https://picsum.photos/200", name: "Warehouse 15", title: "Ordered", subtext: "Order No.15" },
            { id: 2, image: "https://picsum.photos/200", name: "Warehouse 15", title: "Ordered", subtext: "" },
            { id: 3, image: "https://picsum.photos/200", name: "Warehouse 15", title: "Ordered", subtext: "Order No.15" }
        ]
    },
    {
        id: 2,
        title: "Activity Name 2",
        cardsData: [
            { id: 1, image: "https://picsum.photos/200", name: "Warehouse 10", title: "Ordered", subtext: "Order No.15" },
            { id: 2, image: "https://picsum.photos/200", name: "Warehouse 10", title: "Ordered", subtext: "" },
            { id: 3, image: "https://picsum.photos/200", name: "Warehouse 10", title: "Ordered", subtext: "Order No.15" }
        ]
    },
    {
        id: 3,
        title: "Activity Name 3",
        cardsData: [
            { id: 1, image: "https://picsum.photos/200", name: "Warehouse 20", title: "Ordered", subtext: "Order No.15" },
            { id: 2, image: "https://picsum.photos/200", name: "Warehouse 20", title: "Ordered", subtext: "" },
            { id: 3, image: "https://picsum.photos/200", name: "Warehouse 20", title: "Ordered", subtext: "Order No.15" }
        ]
    },
]

function Dashboard() {
    return (
        <div className="page-content">
            <PageTitle title="Dashboard" subtext="Home/Summary" />
            <div className="small-activity">
                {activityList.map((activity) => (
                    <Activity key={activity.id} title={activity.title} cardsData={activity.cardsData} />
                ))}
            </div>
        </div>
    );
}




export default Dashboard;