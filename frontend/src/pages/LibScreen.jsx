import "./LibScreen.css";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import LibItem from "../components/LibItem";
import {addToLib, removeFromLib, removeAllFromLib} from "../redux/dispatchers/libActions";

const LibScreen = ({history}) => {
    const dispatch = useDispatch();
    const lib = useSelector((state) => state.lib);
    const {libItems} = lib;

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

    return (
        <>
            <div className="lib__screen">
                <div className="lib__content">
                    <h2>Библиотека</h2>

                    {libItems.length === 0 ? (
                        <h2>
                            В вашей библиотеке еще нет моделей самолетов. <Link to="/">Вернуться на главную</Link>
                        </h2>
                    ) : (
                        <div className="lib__content__container">
                            {libItems.map((item) => (
                                <LibItem
                                    key={item.product}
                                    item={item}
                                    removeHandler={removeFromLibHandler}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="lib__stats">
                    <div className="lib__stats__count">
                        <p>Всего моделей в библиотеке {getLibCount()} шт</p>
                    </div>
                    <div>
                        <div className="info__button lib__info__button" onClick={onRemoveAllHandle}>Удалить все модели</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LibScreen;
