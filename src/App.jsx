import './App.css'
import { NavBar } from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
import { CartContextProvider } from './Context/CartContext'
import { CartList } from './components/CartList/CartList.'
import { CartListContainer } from './components/CartListContainer/CartListContainer'
import { CheckOut } from './components/CheckOut/CheckOut'



function App() {


  return (
    <CartContextProvider>
      <BrowserRouter>


        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
          <Route path='/subCategory/:subCategoryId' element={<ItemListContainer />}></Route>
          <Route path='/checkOut' element={<CheckOut/>}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<CartListContainer />}></Route>

        </Routes>

      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
