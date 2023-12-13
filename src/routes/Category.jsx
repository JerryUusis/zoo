import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const Category = (props) => {
    const params = useParams();
    const category = params.categories;

    return (
        <>
            <SearchBar handleSearch={props.handleSearch} />
            <div className="main-container">
                <div className="card-container">
                    {props[category].filter((item) => item.name.toLowerCase().includes(props.search))
                        .map((item) => (
                            <Card
                                key={item.name}
                                name={item.name}
                                likes={item.likes}
                                handleIcon={props.handleIcon(item.likes)}
                                removeCard={() => props.removeCard(item.name, category)}
                                handleLikeClick={(event) => { props.handleLikeClick(item.name, category, event.target) }}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Category;