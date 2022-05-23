import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Dummy from './Dummy'
import Template from './Template'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Dummy/>} />
      <Route exact path='/:ref' element={<Template/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App