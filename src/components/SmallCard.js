import "../styles/SmallCard.css";


function SmallCard(props) {
    const { img, name, title, subtext } = props;

    return (
        <div className="small-card">
            <img src={img} alt="img" />
            <h2>{name}</h2>
            <div className="small-card-text">
                <h1>{title}</h1>
                <p>{subtext}</p>
            </div>
        </div>
    );
}

export default SmallCard;