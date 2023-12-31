import logo from '../../assets/logorouge.png';
import './navbar.scss';


import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <header className='navigation'>
            <div className='navLogo'>
                <Link to="/"><img src={logo} alt='Kasa' className='kasa-logo' /></Link>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><Link to="/" className="navLink">Accueil</Link></li>
                    <li><Link to="/about" className="navLink">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar

