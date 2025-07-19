// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/home.component'
import Pindah from './pages/pindah.component'
// import Backend from './pages/backend.component'

import './App.css'

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/pindah" element={<Pindah />} />
      {/* <Route path="/backend" element={<Backend />} /> */}
    </Routes>
  )
}

export default App
