import "../styles/SmallCard.css";


function SmallCard(props) {
    return (
        <div className="small-card">
            <img src={props.img} alt="img"/>
            <h2>{props.name}</h2>
            <div className="small-card-text">
                <h1>{props.title}</h1>
                <p>{props.subtext}</p>
            </div>
        </div>
    );
}

export default SmallCard;