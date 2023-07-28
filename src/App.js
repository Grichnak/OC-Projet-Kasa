
import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from './pages/home/home';
import AboutPage from './pages/about/About';
import {LogementPage} from "./pages/logement/logement";
import {PageNotFound} from "./pages/notFound/pageNotFound";
import {Footer} from "./components/Footer/Footer";
import {NavBar} from './components/navbar/navBar';
import './components/navbar/navbar.scss';

function App() {
    return (
        <div>             
            <NavBar />
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/logement' element={<LogementPage/>}/>
                <Route path='*' element={<PageNotFound/>}/>
              </Routes>
            <Footer />
        </div>
    );
}
export default App;