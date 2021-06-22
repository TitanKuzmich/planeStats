import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__logo">
                    <h2>Самолеты Российской авиации</h2>
                </div>

                <ul className="navbar__links">
                    <li>
                        <Link to="/lib">Ваша библиотека</Link>
                    </li>
                    <li>
                        <Link to="/">Каталог</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
