import { useParams } from 'react-router-dom';
import cars from '../data/cars.json'

const CarDetailPage = () => {

    let carParams = useParams();
    console.log(carParams);

    let carFilter = cars.filter((elt) => {
        return elt.id === Number(carParams.label)
    })
    console.log(carFilter);

    return (
        <div>
            <h2>{carFilter[0].CarMake}</h2>
            <h2>{carFilter[0].carModel}</h2>
            <h2>{carFilter[0].CarYear}</h2>
        </div>
    )
}

export default CarDetailPage;