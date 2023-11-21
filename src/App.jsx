import "./App.css";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from './routes/Root'
import Home from "./components/Home";
import Animals from "./components/Animals";
import Birds from "./components/Birds";
import About from "./components/About";
import { animals, birds } from "./animalsList";
import SinglePage from "./components/SinglePage";

function App() {
  const [animalData, setAnimalData] = useState(animals);
  const [birdData, setBirdData] = useState(birds);
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

  const removeCard = (categoryName, category) => {
    if (category === "animal") {
      return setAnimalData(animalData.filter((item) => item.name !== categoryName));
    }
    return setBirdData(birdData.filter((item) => item.name !== categoryName))
  }

  // Go through each object of animalData
  // Create a variable for return
  // map through animalData and set a condition if iterable object .name equals to animalName
  // Check if the button clicked is a like or dislike button
  // Return spread operator for animal object to increase or decrease likes with 1
  // Else return the original animal
  // Use setAnimalData to update the results

  const handleLikeClick = (categoryName, category, buttonType) => {
    const updateLikes = category.map((species => {
      if (species.name === categoryName) {
        if (buttonType.className === "likeButton") {
          return { ...species, likes: species.likes + 1 }
        }
        else if (buttonType.className === "dislikeButton") {
          return { ...species, likes: species.likes - 1 }
        }
      }
      return species
    }))
    if (category === birdData) {
      setBirdData(updateLikes)
    } else {
      setAnimalData(updateLikes)
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  const router = createBrowserRouter([
    {
      path: '/', element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        { path: "animals/:name", element: <SinglePage categoryData={animalData} /> },
        { path: "birds/:name", element: <SinglePage categoryData={birdData}/> },
        {
          path: '/animals', element: <Animals
            handleSearch={handleSearch}
            animalData={animalData}
            removeCard={removeCard}
            search={search}
            handleIcon={handleIcon}
            handleLikeClick={handleLikeClick}
          />
        },
        {
          path: '/birds', element: <Birds
            handleSearch={handleSearch}
            birdData={birdData}
            removeCard={removeCard}
            search={search}
            handleIcon={handleIcon}
            handleLikeClick={handleLikeClick} />
        },
        { path: '/about', element: <About /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;