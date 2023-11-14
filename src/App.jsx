import "./App.css";
import { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import ArrayButton from "./ArrayButton";
import Card from "./Card";
import { animals } from "./animalsList";


function App() {
  const [animalData, setAnimalData] = useState(animals);
  const [search, setSearch] = useState("");
  
  
  // Set the correct string to display right icon in the card
  const handleIcon = (likeAmount) => {
    if (likeAmount < 0) {
      return "sentiment_dissatisfied"
    }
    else if (likeAmount === 0) {
      return "sentiment_neutral"
    }
    else if (likeAmount > 0) {
      return "mood"
    }
  }

  const removeCard = (animalName) => {
    setAnimalData(animalData.filter((item) => item.name !== animalName));
  };

  // Go through each object of animalData
  // Create a variable for return
  // map through animalData and set a condition if iterable object .name equals to animalName
  // Check if the button clicked is a like or dislike button
  // Return spread operator for animal object to increase or decrease likes with 1
  // Else return the original animal
  // Use setAnimalData to update the results

  const handleLikeClick = (animalName, buttonType) => {
    const updateLikes = animalData.map((animal => {
      if (animal.name === animalName) {
        if (buttonType.className === "likeButton") {
          return { ...animal, likes: animal.likes + 1 }
        }
        else if (buttonType.className === "dislikeButton") {
          return { ...animal, likes: animal.likes - 1 }
        }
      }
      return animal
    }))
    setAnimalData(updateLikes)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <>
      <Header />
      <div className="array-button-container">
        <ArrayButton name="Animals" />
        <ArrayButton name="Birds" />
        <ArrayButton name="Show all" />
      </div>
      <SearchBar handleChange={handleSearch}/>
      <div className="main-container">
        <div className="card-container">
          {animalData.filter((animal) => animal.name.includes(search))
          .map((animal) => (
            <Card
              key={animal.name}
              name={animal.name}
              likes={animal.likes}
              checkMood={handleIcon(animal.likes)}
              removeCard={() => removeCard(animal.name)}
              // Add a second argument to check the type of click such as "like" or "dislike" and make conditional in the function which one it will use for increments or decreasing the likes amount. This is for handleClick event
              likeClick={(event) => handleLikeClick(animal.name, event.target)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;