import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Shop from './Shop/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <Shop></Shop>
      </div>
    </>
  )
}

export default App
