import './App.css';
import React, { useEffect } from'react';
import { useState } from 'react';
import Home from './HomePage/Home';
import Middle from './Middle/Middle';
import MyCarousel from './Carousel/Carousel';
import Viewmore from './Viewmore/viewmore';
import Characters from './Viewmore/characters';
import {Route,Routes,BrowserRouter,HashRouter } from 'react-router-dom';
function App() {
 const [topAnime, setTopAnime] = useState([]);


  const GetTopAnime = async () => {
  const temp = await fetch("https://api.jikan.moe/v4/seasons/now")
  .then(res => res.json());

setTopAnime(temp.data.slice(0, 20));

  };

  useEffect(() => {
 GetTopAnime();
 

}, []);
console.log(topAnime);



 


 
   
  return (
    <div className="app d-flex flex-column justify-content-center align-items-center">


<Routes>
<Route path="/." element={<Home topAnime={topAnime}/>}/>
<Route path="/carousel" element={<MyCarousel/>}/>
<Route path="/middle" element={<Middle/> }/>
<Route path="/.." element={<Viewmore topAnime={topAnime}/>}/>
<Route  path="/" element={<Characters/>}/>
</Routes>

    </div>
  );
}

export default App;
