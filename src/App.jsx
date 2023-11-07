import './App.css'
import { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import Footer from './Footer'
import ArrayButton from './ArrayButton'
import Card from './Card'
import { animals, birds } from './animalsList';


function App() {
  const [animalData, setAnimalData] = useState(animals, birds);

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
            <Card key={i} name={animal.name} likes={animal.likes} />
          )))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App