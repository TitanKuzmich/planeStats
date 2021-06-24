import "./PlaneScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPlaneDetails } from "../redux/dispatchers/planeActions";
import { addToLib } from "../redux/dispatchers/libActions";

const PlaneScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const planeDetails = useSelector((state) => state.getPlaneDetails);
  const { loading, error, plane } = planeDetails;

  useEffect(() => {
    if (plane && match.params.id !== plane._id) {
      dispatch(getPlaneDetails(match.params.id));
    }
  }, [dispatch, match, plane]);

  const addToCartHandler = () => {
    dispatch(addToLib(plane._id, 1));
    history.push(`/lib`);
  };

  return (
    <div className="plane__screen">
      {loading ? (
        <h2>Загрузка...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="plane__container">
            <div className="plane__image">
              <img src={plane.imageUrl} alt={plane.name} />
            </div>
            <div className="plane__info">
              <div className="plane__info__header">
                <p className="plane__name">Название: {plane.name}</p>

                <div className="info__button plane__info_button" onClick={addToCartHandler}>
                  Добавить в свою библиотеку
                </div>
              </div>
              <div className="plane__info__description">
                <span className="plane__description__title">Описание:</span>

                {plane.description}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlaneScreen;
