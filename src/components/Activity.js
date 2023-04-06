import "../styles/Activity.css";
import SmallCard from "./SmallCard";
function Activity(props) {
    return (
        <div className="wrapper">
            <h1>{props.title}</h1>
            <div className="cards">
                <SmallCard img="https://picsum.photos/200" name="Warehouse 15" title="Ordered" subtext="Order No.15"/>
                <SmallCard img="https://picsum.photos/200" name="Warehouse 15" title="Ordered" subtext=""/>
                <SmallCard img="https://picsum.photos/200" name="Warehouse 15" title="Ordered" subtext="Order No.15"/>
            </div>
        </div>
    );
}

export default Activity;