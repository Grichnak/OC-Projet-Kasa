
import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from './pages/home/home';
import {AboutPage} from './pages/about/about';
import {LogementPage} from "./pages/logement/logement";
import {PageNotFound} from "./pages/notFound/pageNotFound";
import {Header} from "./components/Header/Header";
import {NavBar} from './components/navbar/NavBar';
import './components/navbar/navbar.scss';

function App() {
    return (
        <div>
            <Header /> 
            <NavBar />
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/logement' element={<LogementPage/>}/>
                <Route path='*' element={<PageNotFound/>}/>
              </Routes>
        </div>
    );
}

export default App;