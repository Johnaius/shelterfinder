import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GetShelter from './GetShelter'
import './App.css'
import ShowShelters from './ShowShelters';

function App() {
  const [shelters, setShelters] = useState(0)

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<GetShelter setShelters={setShelters}/>} />
          <Route path="/shelters" element={<ShowShelters shelters={shelters}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
