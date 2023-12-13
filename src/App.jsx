import "./App.css";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from './routes/Root'
import Home from "./routes/Home";
import Animals from "./routes/Animals";
import Birds from "./routes/Birds";
import About from "./routes/About";
import { animals, birds } from "./animalsList";
import SinglePage from "./routes/SinglePage";
import Category from "./routes/Category";

function App() {
  const [animalData, setAnimalData] = useState(animals);
  const [birdData, setBirdData] = useState(birds);
  const [search, setSearch] = useState("");
  const [zoo, setZoo] = useState({ animals: animals, birds: birds })

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

  const removeCard = (speciesName, category) => {
    const updatedArray = zoo[category].filter((item) => item.name !== speciesName);
    setZoo({ ...zoo, [category]: updatedArray });
  }

  const handleLikeClick = (creatureName, category, buttonType) => {
    const updateLikes = category.map((species => {
      if (species.name === creatureName) {
        if (buttonType.className === "likeButton") {
          return { ...species, likes: species.likes + 1 }
        }
        else if (buttonType.className === "dislikeButton") {
          return { ...species, likes: species.likes - 1 }
        }
      }
      return species
    }))
    setZoo({ ...zoo, [category]: updateLikes })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  const router = createBrowserRouter([
    {
      path: '/', element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        // { path: "animals/:name", element: <SinglePage categoryData={animalData} /> },
        // { path: "birds/:name", element: <SinglePage categoryData={birdData} /> },
        {
          path: ':categories', element: <Category
            {...zoo}
            handleSearch={handleSearch}
            removeCard={removeCard}
            search={search}
            handleIcon={handleIcon}
            handleLikeClick={handleLikeClick} />
        },
        // {
        //   path: '/animals', element: <Animals
        //     handleSearch={handleSearch}
        //     animalData={animalData}
        //     removeCard={removeCard}
        //     search={search}
        //     handleIcon={handleIcon}
        //     handleLikeClick={handleLikeClick}
        //   />
        // },
        // {
        //   path: '/birds', element: <Birds
        //     handleSearch={handleSearch}
        //     birdData={birdData}
        //     removeCard={removeCard}
        //     search={search}
        //     handleIcon={handleIcon}
        //     handleLikeClick={handleLikeClick} />
        // },
        { path: '/about', element: <About /> }
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