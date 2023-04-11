import "../styles/ProductStyle.css"
import PageTitle from "../components/PageTitle";
import ProductCard from '../components/ProductCard';


const products = [
    {
        product_id: "123",
        name: "Product 1",
        description: "This is product 1",
        photo: "https://picsum.photos/200",
        stock: 10
    },
    {
        product_id: "456",
        name: "Product 2",
        description: "This is product 2",
        photo: "https://picsum.photos/200",
        stock: 5
    },
    {
        product_id: "789",
        name: "Product 3",
        description: "This is product 3",
        photo: "https://picsum.photos/200",
        stock: 20
    },
    {
        product_id: "1011",
        name: "Product 4",
        description: "This is product 4",
        photo: "https://picsum.photos/200",
        stock: 15
    },
    {
        product_id: "1213",
        name: "Product 5",
        description: "This is product 5",
        photo: "https://picsum.photos/200",
        stock: 8
    }
];

function handleProductClick(productId) {
    console.log(`Product ${productId} clicked`);
    // Perform some action here when a product is clicked, e.g. show a modal, navigate to a new page, etc.
}

function Product() {
    return (
        <div className="page-content">
            <PageTitle title="Products" subtext="View/Manage"/>
            <div className="product-card-container">
                {products.map(product => (
                    <ProductCard
                        key={product.product_id}
                        product_id={product.product_id}
                        name={product.name}
                        description={product.description}
                        photo={product.photo}
                        stock={product.stock}
                        onClick={handleProductClick}
                    />
                ))}
            </div>
        </div>
    );
}

export default Product;