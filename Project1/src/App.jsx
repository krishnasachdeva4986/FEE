import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import About from './About.jsx' 
import Productcart from './Productcart.jsx'
import Home from './Home.jsx'
import Counter from './Counter.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <About/>
    <Productcart/>
    <Home/>
    <Counter/>

    </>
    
  )
}

export default App
