import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";

import {addPlane} from "../redux/dispatchers/planeActions";

import "./AddPlane.css";

const AddPlane = () => {
    const dispatch = useDispatch();
    const [showPopup, setShowPopup] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        imageUrl: ""
    })

    const onAddHandle = () => {
        dispatch(addPlane(data))
        setData({
            name: "",
            description: "",
            imageUrl: ""
        })
    }

    return (
        <React.Fragment>
            <div className="add__fixed__btn info__button" onClick={() => setShowPopup(true)}>Добавить в каталог</div>
            <div className={showPopup ? "wrapper show__popup" : "wrapper"}>
                <div className="info__area">
                    <div className="input__area">
                        <div className="info__area__name">Название</div>
                        <input type="text"
                               name="name"
                               className="add__area__input"
                               value={data.name}
                               onChange={(e) => setData({...data, name: e.target.value})}
                        />
                    </div>
                    <div className="input__area">
                        <div className="info__area__name">Ссылка на изображение</div>
                        <input type="text"
                               name="imageUrl"
                               className="add__area__input"
                               value={data.imageUrl}
                               onChange={(e) => setData({...data, imageUrl: e.target.value})}
                        />
                    </div>
                    <div className="input__area">
                        <div className="info__area__name">Описание</div>
                        <textarea
                            name="description"
                            className="add__area__input add__textarea"
                            value={data.description}
                            onChange={(e) => setData({...data, description: e.target.value})}
                        />
                    </div>

                    <div className="info__button" onClick={onAddHandle}>Добавить</div>
                </div>

                <div className="remove" onClick={() => {setShowPopup(false)}}>&#11015;</div>
            </div>
        </React.Fragment>
    );
};

export default AddPlane;
