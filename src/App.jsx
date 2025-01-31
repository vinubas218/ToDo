import React from 'react'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Rtodolist from './Rtodolist'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Rtodolist />}></Route>
        </Routes>
      </BrowserRouter>

    </div>


  )
}

export default App
