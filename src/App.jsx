import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { MovieCard } from "./components/MovieCard";
import { FavoriteList } from "./components/FavoriteList";
import { Footer } from "./components/Footer";
import { WatchList } from "./components/WatchList";
import { About } from "./components/About";
import { Home } from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/watchlist" element={<WatchList/>}/>
        <Route path="/favorite" element={<FavoriteList/>}/>
        <Route path="/about" element={<About/>}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
