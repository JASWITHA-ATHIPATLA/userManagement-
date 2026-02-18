import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateUsers from './CreateUsers'
import Delete from './DeleteUsers'
import UpdateUsers from './UpdateUsers'
import Home from './Home.jsx'

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreateUsers/>} />
        <Route path="/update/:id" element={<UpdateUsers/>} />
        <Route path="/delete" element={<Delete/>} />
     </Routes>
     </BrowserRouter>
  )
}
export default App
