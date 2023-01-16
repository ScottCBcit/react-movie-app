import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WatchList } from "./pages/WatchList";
import { Favorites } from "./pages/Favorites";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { GlobalProvider } from "./context/GlobalContext";
import { MovieDetails } from "./pages/MovieDetails";



function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/details/:id" element={<MovieDetails/>}/>
        <Route path="/watchlist" element={<WatchList/>}/>
        <Route path="/favorite" element={<Favorites/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
