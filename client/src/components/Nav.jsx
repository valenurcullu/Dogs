import { Link, NavLink } from 'react-router-dom';
import './Estilos/Nav.css';
import logo from './Estilos/dogLogo.webp';
export default function Nav() {
    return (
        <nav className="header">
            
            <div className="headerLogo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                
            </div>
            <nav className="headerLinks">
                <div className="links">
                    <NavLink exact to="/home">
                        Home
                    </NavLink>
                </div>
                <div className="links">
                    <NavLink to="/create">Create Breed</NavLink>
                </div>
            </nav>
        </nav>
    );
}
