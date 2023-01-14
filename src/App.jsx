import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WatchList } from "./pages/WatchList";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

import { GlobalProvider } from "./context/GlobalContext";


function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/watchlist" element={<WatchList/>}/>
        <Route path="/favorite" element={<Favorites/>}/>
        <Route path="/about" element={<About/>}/>        
      </Routes>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
