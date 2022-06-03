import React from 'react';
import NavBar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );

}

export default App;
