import './App.css'
import { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import Footer from './Footer'
import ArrayButton from './ArrayButton'
import Card from './Card'
import { animals } from './animalsList';


function App() {
  const [animalData, setAnimalData] = useState(animals);

  const removeCard = (animalName) => {
     setAnimalData(animalData.filter((item) => item.name !== animalName))
  }

  return (
    <>
      <Header />
      <div className="array-button-container">
        <ArrayButton name="Animals"  />
        <ArrayButton name="Birds" />
        <ArrayButton name="Show all" />
      </div>
      <SearchBar />
      <div className="main-container">
        <div className="card-container">
          {animalData.map(((animal, i) => (
            <Card key={i} id={i+1} name={animal.name} likes={animal.likes} removeCard = {() => removeCard(animal.name)}/>
          )))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App