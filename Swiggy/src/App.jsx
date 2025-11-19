import React from 'react'
import { BrowserRouter , Routes, Route , Link } from "react-router-dom";
import Home from './Components/Home';
import Restaurant from "./Components/Restaurant"
import RestaurantMenu from './Components/RestaurantMenu';
import SearchFood from './Components/SearchFood';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
      <Route path="/city/lucknow/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
      <Route path="/city/lucknow/:id/search" element={<SearchFood></SearchFood>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
