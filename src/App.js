import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./pages/Home";
import AskToMe from './pages/AskToMe';
import SelectedWork from './pages/SelectedWork';
import ContactMe from './pages/ContactMe';
import { initGA, trackPageView } from './utils/analytics';

export default function App() {
  // <script async src="https://www.googletagmanager.com/gtag/js?id=G-G9S9Q0FNWJ"></script>
  // <!-- <script async
  //       src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAj5U66hGVyHofoKRk8wXrnTaLZdWiY7nA&callback=console.debug&libraries=maps,marker&v=beta"> </script> -->
  // <script>
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag() { dataLayer.push(arguments); }
  //   gtag('js', new Date());

  //   gtag('config', 'G-G9S9Q0FNWJ');
  // </script>

  useEffect(() => {
    initGA("G-G9S9Q0FNWJ");
  }, []);

  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asktome" element={<AskToMe />} />
        <Route path="/selectedwork" element={<SelectedWork />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </Router>
  );
};

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
};
