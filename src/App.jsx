import './App.css'
import React,{ lazy} from 'react';
import { RecoilRoot } from 'recoil';
const Weblayout = React.lazy(()=>import("./components/Weblayout"));
const Layout = React.lazy(()=>import("./components/PFcontainer/Layout"));
const Posts = React.lazy(()=>import("./components/PFcontainer/Posts"));
const Home = React.lazy(()=>import("./components/Home"));
const Settingslayout = React.lazy(()=>import("./components/Settingslayout"));
const Theme = React.lazy(()=>import("./components/Theme"));
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route element={<Weblayout/>}>
        <Route index element ={<Home/>}/>
        <Route path="/settings/*" element={<Settingslayout/>}>
        <Route path="theme" element={<Theme/>}/>
        </Route>
        <Route path="/profile/*" element ={<Layout/>}>
        <Route index element={<Posts prop={"Posts Section"}/>}/>
        <Route path="likesyou" element={<Posts prop={"Likes You Section"}/>}/>
        <Route path="matches" element={<Posts prop={"Matches Section"}/>}/>
        <Route path="dates" element={<Posts prop={"Dates Section"}/>}/>
        </Route>
        </Route>
      </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
