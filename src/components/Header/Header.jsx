import {Link} from "react-router-dom";
import './Header.scss';

export const Header = () => {
    return <nav className="header">
        <ul>
            <li><Link to="/" className="link">home</Link></li>
            <li><Link to="/about" className="link">about</Link></li>
            <li><Link to="/logement" className="link">logement</Link></li>
        </ul>
    </nav>
}