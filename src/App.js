import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./pages/Home";
import AskToMe from './pages/AskToMe';
import SelectedWork from './pages/SelectedWork';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asktome" element={<AskToMe />} />
        <Route path="/selectedwork" element={<SelectedWork />} />
      </Routes>
    </Router>
  );
}