import './App.css'
import { Sidebar } from './components/Sidebar'
import React,{ lazy} from 'react';
const Layout = React.lazy(()=>import("./components/Layout"));
const Posts = React.lazy(()=>import("./components/Posts"));
const Home = React.lazy(()=>import("./components/Home"));
import {BrowserRouter,Route,Routes,useNavigate} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className='flex'>
      <Sidebar/>
      <Routes>
        <Route path="/*" element ={<Home/>}/>
        <Route path="/profile/*" element ={<Layout/>}>
        <Route index element={<Posts head={"Posts Section"}/>}/>
        <Route path="likesyou" element={<Posts head={"Likes You Section"}/>}/>
        <Route path="matches" element={<Posts head={"Matches Section"}/>}/>
        <Route path="dates" element={<Posts head={"Dates Section"}/>}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
