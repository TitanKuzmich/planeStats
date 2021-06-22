import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getPlaneDetails } from "../redux/actions/planeActions";
import { addToLib } from "../redux/actions/libActions";

const PlaneScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const getPlaneDetails = useSelector((state) => state.getPlaneDetails);
  const { loading, error, plane } = getPlaneDetails;

  useEffect(() => {
    if (plane && match.params.id !== plane._id) {
      dispatch(getPlaneDetails(match.params.id));
    }
  }, [dispatch, match, plane]);

  useEffect(() => {
    dispatch(getPlaneDetails(match.params.id));
  }, []);

  const addToCartHandler = () => {
    dispatch(addToLib(plane._id, qty));
    history.push(`/lib`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Загрузка...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={plane && plane.imageUrl} alt={plane && plane.name} />
            </div>
            <div className="left__info">
              <p className="left__name">Название: {plane && plane.name}</p>
              <p>Описание: {plane && plane.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Добавить в свою библиотеку
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlaneScreen;
