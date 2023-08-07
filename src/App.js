import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './routes/Home'
import About from './routes/About'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        {/* 주소창에 path name이 슬래쉬일때 home컴포넌트가 나와라 */}
        <Route path='/about' element={<About/>}/>
        {/* 주소창에 path name이 /about일때 About컴포넌트가 나와라 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App