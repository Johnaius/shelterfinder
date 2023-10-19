import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GetShelter from './GetShelter'
import './App.css'
import ShowShelters from './ShowShelters';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<GetShelter />} />
          <Route path="/shelters" element={<ShowShelters />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
