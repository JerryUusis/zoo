import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const Category = (props) => {
    const params = useParams();
    const category = params.categories;

    console.log(category)

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
                                likeClick={(event) => {props.handleLikeClick(item.name, props[category], event.target)}}
                            />
                        ))}
                    <p>Category will be here</p>
                </div>
            </div>
        </>
    )
}

export default Category;