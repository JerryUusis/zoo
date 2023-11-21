import SearchBar from "./SearchBar"
import Card from "./Card"

const Birds = ({ handleSearch, birdData, removeCard, search, handleIcon, handleLikeClick }) => {
    return (

        <>
        <SearchBar handleChange={handleSearch} />
        <div className="main-container">
            <div className="card-container">
                {birdData.filter((bird) => bird.name.includes(search))
                .map((bird) => (
                    <Card 
                        key={bird.name}
                        name={bird.name}
                        likes={bird.likes}
                        checkMood={handleIcon(bird.likes)}
                        removeCard={() => removeCard(bird.name, "bird")}
                        likeClick={(event) => handleLikeClick(bird.name, event.target)}
                        />
                ))}
            </div>
        </div>
        </>
    )
}

export default Birds;