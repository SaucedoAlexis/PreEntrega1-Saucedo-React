import './App.css'
import { NavBar } from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemList } from './components/ItemList/ItemList'



function App() {


  return (
    <BrowserRouter>


      <NavBar />
      <Routes>
        <Route path='/' element={<ItemList />}></Route>
        <Route path='/category/:categoryId' element={<ItemList />}></Route>
        <Route path='/subCategory/:subCategoryId' element={<ItemList />}></Route>
        <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
