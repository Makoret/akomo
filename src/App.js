import React from "react";
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './views/Menu.jsx';
import Map_view from './views/Map_view';
import Administrative_view from './views/Administrative_view.jsx';
import Diplomatic_view from './views/Diplomatic_view.jsx';
import Military_view from './views/Military_view.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route exact path="/game" element={<Map_view />} />
        <Route exact path="/administration" element={<Administrative_view />} />
        <Route exact path="/diplomacy" element={<Diplomatic_view />} />
        <Route exact path="/military" element={<Military_view />} />
      </Routes>
    </BrowserRouter>
    // <Administrative_view />
    // <Diplomatic_view />
    // <Military_view />
  );
}

export default App;
