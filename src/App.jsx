import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Home from  "./components/Home";
import Animals from "./components/Animals";
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

      <Animals 
        handleSearch={handleSearch}
        animalData={animalData}
        removeCard={removeCard}
        search={search}
        handleIcon = {handleIcon}
        handleLikeClick={handleLikeClick}
        />
      <Footer />
    </>
  );
}

export default App;