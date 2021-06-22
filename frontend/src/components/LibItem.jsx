import "./CartItem.css";
import { Link } from "react-router-dom";

const LibItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/planes/${item.plane}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.plane)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default LibItem;
