import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import LibItem from "../components/LibItem";

// Actions
import { addToLib, removeFromLib, removeAllFromLib } from "../redux/actions/libActions";

  const LibScreen = ({history}) => {
  const dispatch = useDispatch();
  const lib = useSelector((state) => state.lib);
  const { libItems } = lib;

  useEffect(() => {
    console.log(libItems)
  }, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToLib(id, qty));
  };

  const removeFromLibHandler = (id) => {
    dispatch(removeFromLib(id));
  };

  const onRemoveAllHandle = () => {
    dispatch(removeAllFromLib());
    history.push("/")
  };

  const getLibCount = () => {
    return libItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getLibSubTotal = () => {
    return libItems
      .reduce((item) => item.qty, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Библиотека</h2>

          {libItems.length === 0 ? (
            <div>
               В вашей библиотеке еще нет моделей самолетов. <Link to="/">Вернуться на главную</Link>
            </div>
          ) : (
            libItems.map((item) => (
              <LibItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromLibHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Всего моделей в библиотеке ({getLibCount()})</p>
            <p>${getLibSubTotal()}</p>
          </div>
          <div>
            <button onClick={onRemoveAllHandle}>Удалить все модели</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibScreen;
