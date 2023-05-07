import "../styles/ProductStyle.css"
import PageTitle from "../components/PageTitle";


function Supervisor_product() {

    return (
        <div className="page-content">
            <PageTitle title="Products In Warehouse" subtext="View/Manage"/>
            <div className="product-wrapper">
                <div className="product-card-container">
                    Product in Warehouse
                </div>
            </div>
           
        </div>
    );
}


export default Supervisor_product;