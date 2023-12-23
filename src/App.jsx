import "./App.css";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Root from './routes/Root'
import Home from "./routes/Home";
import About from "./routes/About";
import { animals, birds } from "./animalsList";
import SinglePage from "./routes/SinglePage";
import Category from "./routes/Category";

function App() {
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

  const handleLikeClick = (creatureName, categoryName, buttonType) => {
    const updateLikes = zoo[categoryName].map((species) => {
      if (species.name === creatureName) {
        if (buttonType.className === "likeButton") {
          return { ...species, likes: species.likes + 1 }
        }
        else if (buttonType.className === "dislikeButton") {
          return { ...species, likes: species.likes - 1 }
        }
      }
      return species
    })

    setZoo((previousZoo) => (
      { ...previousZoo, [categoryName]: updateLikes }
    ))
  }

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  const filterItems = (array, searchValue) => {
    return array.filter((item) => item.name.toLowerCase().includes(searchValue));
  }

  const router = createBrowserRouter([
    {
      path: '/', element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        { path: ":categories/:name", element: <SinglePage zoo={zoo} /> },
        {
          path: ':categories', element: <Category
            {...zoo}
            handleSearch={handleSearch}
            filterItems={filterItems}
            removeCard={removeCard}
            search={search}
            handleIcon={handleIcon}
            handleLikeClick={handleLikeClick} />
        },
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