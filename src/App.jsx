import './App.css'
import { NavBar } from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

import { ItemListContainer } from './components/itemListContainer/ItemListContainer'



function App() {


  return (
    <BrowserRouter>


      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
        <Route path='/subCategory/:subCategoryId' element={<ItemListContainer />}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
