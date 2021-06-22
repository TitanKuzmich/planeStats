import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const lib = useSelector((state) => state.lib);
  const { libItems } = lib;

  const getLibCount = () => {
    return libItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Каталог самолетов</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/lib" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Ваша библиотека <span className="cartlogo__badge">{getLibCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Каталог</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
