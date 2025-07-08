import './App.css'
import React,{ lazy} from 'react';
const Weblayout = React.lazy(()=>import("./components/Weblayout"));
const Layout = React.lazy(()=>import("./components/Layout"));
const Posts = React.lazy(()=>import("./components/Posts"));
const Home = React.lazy(()=>import("./components/Home"));
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Weblayout/>}>
        <Route index element ={<Home/>}/>
        <Route path="/profile/*" element ={<Layout/>}>
        <Route index element={<Posts head={"Posts Section"}/>}/>
        <Route path="likesyou" element={<Posts head={"Likes You Section"}/>}/>
        <Route path="matches" element={<Posts head={"Matches Section"}/>}/>
        <Route path="dates" element={<Posts head={"Dates Section"}/>}/>
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
