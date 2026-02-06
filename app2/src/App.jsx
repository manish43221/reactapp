
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
function App(){
  const y=[2024, 2025 , 2026 ];
  const c={name:"Kiet", location:"Ghaziabad", Specialisation:"tech"}
  return (
    <>
    <Header title="My first React App"/>
    <Header title="Thanks"/>     
     <Footer year= {y} company={c}/>
    </>
  )
}

export default App
