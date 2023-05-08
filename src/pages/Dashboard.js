import "../styles/DashboardStyle.css"
import PageTitle from "../components/PageTitle";
import Activity from "../components/Activity";
import {useEffect, useState} from "react";


function Dashboard() {
    const [products, setProducts] = useState([]);
    const [requests, setRequests] = useState([]);

    function fetchProducts() {
        fetch('http://localhost:3000/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error));
    }

    function fetchRequests() {
        fetch('http://localhost:3000/request', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionID')
            },
        })
            .then(response => response.json())
            .then(data => setRequests(data))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        fetchProducts();
        fetchRequests();
    }, []);

    const productList = products.slice(Math.max(products.length - 3, 0)).reverse();
    const latestProducts = {
        id: 1,
        title: "Latest products",
        cardsData: productList.map((product) => ({
            id: product.product_id,
            image: product.photo,
            name: product.name,
            title: `Stock: ${product.stock}`,
            subtext: `ID: ${product.product_id}`
        }))
    };
    console.log(requests)

    const requestList = requests.slice(Math.max(requests.length - 3, 0)).reverse();
    const latestRequests = {
        id: 2,
        title: "Latest requests",
        cardsData: requestList.map((request) => ({
            id: request.request_id,
            image: "http://127.0.0.1:8080/in-stock.png",
            name: `Supervisor ID: ${request.supervisor_id}`,
            title: request.status,
            subtext: request.date
        }))
    };

    return (
        <div className="page-content">
            <PageTitle title="Dashboard" subtext="Home/Summary"/>
            <div className="small-activity">
                <Activity key={latestProducts.id} title={latestProducts.title} cardsData={latestProducts.cardsData}/>
                <Activity key={latestRequests.id} title={latestRequests.title} cardsData={latestRequests.cardsData}/>
            </div>
        </div>
    );
}

export default Dashboard;
