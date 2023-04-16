import { Link } from 'react-router-dom';

const CarItem = (props) => {
    console.log(props);
    return (
        <div className='grid-item'>
            <h2>{props.brand}</h2>
            <Link to={`/${props.id}`}>Read more</Link>
        </div >
    );
}

export default CarItem;
