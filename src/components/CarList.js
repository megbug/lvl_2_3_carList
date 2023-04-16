import cars from '../data/cars.json'
import CarItem from "./CarItem";

const CarList = () => {
    return (
        <div className='grid'>
            {cars.map((elt) => {
                return (
                    <div >
                        <CarItem
                            brand={elt.CarMake}
                            id={elt.id}
                        />
                    </div>
                )
            })}
        </div>
    )
}



export default CarList;