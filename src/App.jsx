import { useState } from 'react'
import './App.css'
import Nav from './components/Nabbar/Nav'
import Banner from './components/banner/Banner'
import Card from './components/cardSection/Card'
import Recipies from './components/racipies/Recipies'

function App() {
  const [carts, setCarts] = useState([]);
  const [prepares, setPrepares] = useState([]);

  const handleCart = (cartTitle) =>{
    const isExist =carts.find(item => item.id == cartTitle.id);
    if(!isExist){
      setCarts([...carts, cartTitle]);

    }
    else{
      alert('Already selected!');
    }

  }
  
  const removeItem = (id) => {
    
    // const updatedItems = [...items];
    // updatedItems.splice(index, 1);
    // setItems(updatedItems);
    console.log(id);
  };
  return (
    <>
      <div className="main-container mx-28">
       <Nav></Nav>
       <Banner></Banner>
       <Recipies></Recipies>
       <Card handleCart={handleCart} carts={carts} removeItem={removeItem}></Card>
              
      </div>
    </>
  )
}

export default App
