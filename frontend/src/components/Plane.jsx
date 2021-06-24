import "./Plane.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeFromCatalog} from "../redux/dispatchers/planeActions";

const Plane = ({imageUrl, description, name, productId}) => {

    const dispatch = useDispatch();
    const onRemoveFromCatalog = (id) => {
        dispatch(removeFromCatalog(id))
    }

    return (
        <div className="plane">
            <img src={imageUrl} alt={name}/>

            <div className="plane__info">
                <p className="info__name">{name}</p>

                <p className="info__description">{description.substring(0, 100)}...</p>

                <Link to={`/planes/${productId}`} className="info__button">
                    Подробнее
                </Link>
            </div>
            <div className="remove" onClick={() => onRemoveFromCatalog(productId)}>&times;</div>
        </div>
    );
};

export default Plane;
