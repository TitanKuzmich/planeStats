import {useState} from "react";
import {useDispatch} from "react-redux";

import {addPlane} from "../redux/actions/planeActions";

import "./Product.css";

const AddPlane = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name:"",
        description:"",
        imageUrl:""
    })

    const onAddHandle = () => {
        dispatch(addPlane(data))
        setData({
            name:"",
            description:"",
            imageUrl:""
        })
    }

    return (
        <div className="product">
            <div className="input__area">
                <div className="info__name">Название</div>
                <input type="text"
                       name="name"
                       className="add__input"
                       value={data.name}
                       onChange={(e) => setData({...data, name:e.target.value})}
                />
            </div>
            <div className="input__area">
                <div className="info__name">Ссылка на изображение</div>
                <input type="text"
                       name="imageUrl"
                       className="add__input"
                       value={data.imageUrl}
                       onChange={(e) => setData({...data, imageUrl:e.target.value})}
                />
            </div>
            <div className="input__area">
                <div className="info__name">Описание</div>
                <textarea
                       name="description"
                       className="add__input"
                       value={data.description}
                       onChange={(e) => setData({...data, description:e.target.value})}
                />
            </div>

            <div className="info__button" onClick={onAddHandle}>Добавить</div>
        </div>
    );
};

export default AddPlane;
