
import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from './pages/home/Home';
import {AboutPage} from './pages/about/About';
import {LogementPage} from "./pages/logement/Logement";
import PageNotFound from "./pages/notFound/PageNotFound";
import Footer from './components/Footer/Footer';
import {NavBar} from './components/navbar/NavBar';
import "./App.css"

function App() {
    return (
        <div className="app-wrapper">
          <div>
          <NavBar />
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/logement' element={<LogementPage/>}/>
                <Route path='*' element={<PageNotFound/>}/>
              </Routes>
          </div>             
          <Footer />
        </div>
    );
}

export default App;