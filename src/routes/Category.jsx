import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

const Category = (props) => {
    const params = useParams();
    const category = params.categories;

    const filteredItems = props.filterItems(props[category], props.search)

    return (
        <>
            <SearchBar handleSearch={props.handleSearch} />
            <div className="main-container">
                <div className="card-container">
                    {filteredItems.length === 0 ?
                        <p>No matches found with &quot;{props.search}&quot;</p> :
                        filteredItems.map((item) => (
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