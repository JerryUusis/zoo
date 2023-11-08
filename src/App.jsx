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

  const removeCard = (animalName) => {
    setAnimalData(animalData.filter((item) => item.name !== animalName));
  };

  // Go through each object of animalData
  // Create a variable for return
  // map through animalData and set a condition if iterable object .name equals to animalName
  // Return spread operator for animal object to increase the likes with 1
  // Else return the original animal
  // Use setAnimalData to update the results
  const handleLikeClick = (animalName) => {
    const updateLikes = animalData.map((animal => {
      if (animal.name === animalName) {
        return { ...animal, likes: animal.likes + 1 }
      }
      return animal
    }))
    setAnimalData(updateLikes)
  }

  return (
    <>
      <Header />
      <div className="array-button-container">
        <ArrayButton name="Animals" />
        <ArrayButton name="Birds" />
        <ArrayButton name="Show all" />
      </div>
      <SearchBar />
      <div className="main-container">
        <div className="card-container">
          {animalData.map((animal) => (
            <Card
              key={animal.name}
              name={animal.name}
              likes={animal.likes}
              removeCard={() => removeCard(animal.name)}
              // Add a second argument to check the type of click such as "like" or "dislike" and make conditional in the function which one it will use for increments or decreasing the likes amount. This is for handleClick event
              likeClick={() => handleLikeClick(animal.name)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;