import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Academics from './Components/Academics/academics';
import Admissions from './Components/Admissions/admissions';
import Faculty from './Components/Faculty/faculty';
import Students from './Components/Students/students';
import Gallery from './Components/Gallery/gallery';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="/About" element={< About />} />
        <Route path="/academics" element={< Academics />} />
        <Route path="/admissions" element={< Admissions />} />
        <Route path="/faculty" element={< Faculty />} />
        <Route path="/students" element={< Students />} />
        <Route path="/gallery" element={< Gallery />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
