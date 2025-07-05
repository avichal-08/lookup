import './App.css'
import { Sidebar } from './components/Sidebar'
import React,{ lazy} from 'react';
const Layout = React.lazy(()=>import("./components/Layout"));
const Home = React.lazy(()=>import("./components/Home"));
import {BrowserRouter,Route,Routes,useNavigate} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path="/*" element ={<Home/>}/>
        <Route path="/profile/*" element ={<Layout/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
