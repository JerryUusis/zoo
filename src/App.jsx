import './App.css'
// import { useState } from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import CardContainer from './CardContainer'
import Footer from './Footer'
import ArrayButton from './ArrayButton'

function App() {

  return (
    <>
      <Header />
      <div className="array-button-container">
        <ArrayButton name="Animals"/>
        <ArrayButton name="Birds"/>
        <ArrayButton name="Show all"/>
      </div>
      <SearchBar />
      <div className="main-container">
        <CardContainer />
      </div>
      <Footer />
    </>
  )
}

export default App
