import './App.css'
// import { useState } from 'react'
import Header from './Header'
import CardContainer from './CardContainer'
import Footer from './Footer'

function App() {

  return (
    <>
      <Header />
      <div className="main-container">
        <CardContainer />
      </div>
      <Footer />
    </>
  )
}

export default App
