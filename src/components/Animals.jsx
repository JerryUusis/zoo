import SearchBar from "./SearchBar";
import Card from "./Card";

const Animals = ({ handleSearch, animalData, removeCard, handleIcon, search, handleLikeClick }) => {
    return (

        <>
            <SearchBar handleChange={handleSearch} />
            <div className="main-container">
                <div className="card-container">
                    {animalData.filter((animal) =>
                        animal.name.includes(search))
                        .map((animal) => (
                            <Card
                                key={animal.name}
                                name={animal.name}
                                likes={animal.likes}
                                checkMood={handleIcon(animal.likes)}
                                removeCard={() => removeCard(animal.name, "animal")}
                                // Add a second argument to check the type of click such as "like" or "dislike" and make conditional in the function which one it will use for increments or decreasing the likes amount. aThis is for handleClick event
                                likeClick={(event) => handleLikeClick(animal.name, event.target)}
                            />
                        ))}
                </div>
            </div>
        </>
    )
}

export default Animals;