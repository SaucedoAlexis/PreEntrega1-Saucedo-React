import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/navBar/NavBar'
import { ItemListContainer } from './components/itemListContainer/itemListContainer'


function App() {
  

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido!!"/>

    </>
  )
}

export default App
