import "./CatalogScreen.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

// Components
import Plane from "../components/Plane";
import AddPlane from "../components/AddPlane";

//Actions
import {filterPlanes, getPlanes as listPlanes} from "../redux/dispatchers/planeActions";

const CatalogScreen = () => {
    const dispatch = useDispatch();

    const getPlanes = useSelector((state) => state.getPlanes);
    const {planes, loading, error} = getPlanes;

    const setSorting = (sortType) => {
        dispatch(filterPlanes(sortType))
    }

    useEffect(() => {
        dispatch(listPlanes());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Каталог самолетов</h2>
            <div className="homescreen__products">
                {loading ? (
                    <h2>Загрузка...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    planes && planes.map((plane) => (
                        <Plane
                            key={plane._id}
                            name={plane.name}
                            description={plane.description}
                            imageUrl={plane.imageUrl}
                            productId={plane._id}
                        />
                    ))
                )}
                <AddPlane/>
            </div>
        </div>
    );
};

export default CatalogScreen;
