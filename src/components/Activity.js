import "../styles/Activity.css";
import SmallCard from "./SmallCard";
function Activity(props) {
    const { title, cardsData } = props;

    return (
        <div className="wrapper">
            <h1>{title}</h1>
            <div className="cards">
                {cardsData.map((data, index) => (
                    <SmallCard
                        key={index}
                        img={data.image}
                        name={data.name}
                        title={data.title}
                        subtext={data.subtext}
                    />
                ))}
            </div>
        </div>
    );
}

export default Activity;