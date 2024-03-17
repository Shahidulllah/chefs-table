import { useState } from 'react'
import './App.css'
import Nav from './components/Nabbar/Nav'
import Banner from './components/banner/Banner'
import Card from './components/cardSection/Card'
import Recipies from './components/racipies/Recipies'

function App() {
  const [carts, setCarts] = useState([])

  const handleCart = cartTitle =>{
    const newCarts = [...carts, cartTitle]
    setCarts(newCarts);
  }
  return (
    <>
      <div className="main-container mx-28">
       <Nav></Nav>
       <Banner></Banner>
       <Recipies></Recipies>
       <Card handleCart={handleCart} carts={carts}></Card>
              
      </div>
    </>
  )
}

export default App
