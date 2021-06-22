import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  const lib = useSelector((state) => state.lib);
  const { libItems } = lib;

  const getLibCount = () => {
    return libItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/lib">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Ваша библиотека{" "}
              <span className="sidedrawer__cartbadge">{getLibCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Каталог</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
