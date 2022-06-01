import React from 'react';
import NavBar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" elementType={<AboutMe />} />
        <Route path="/Portfolio" elementType={<Portfolio />} />
        <Route path="/Contact" elementType={<Contact />} />
        <Route path="/Resume" elementType={<Resume />} />
      </Routes>
    </BrowserRouter>

  );

}

export default App;
