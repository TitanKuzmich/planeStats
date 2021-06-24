import "./LibItem.css";
import { Link } from "react-router-dom";

const LibItem = ({ item, removeHandler }) => {
  return (
    <div className="lib__item">
      <div className="lib__item__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/planes/${item.plane}`} className="lib__item__name">
        <p>{item.name}</p>
      </Link>
      <button
        className="lib__item__delete"
        onClick={() => removeHandler(item.plane)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default LibItem;
