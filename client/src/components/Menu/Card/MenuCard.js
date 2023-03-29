import { useDispatch } from 'react-redux';
import { addItem } from '../../../features/cartSlice';
import './MenuCard.css';

const MenuCard = ({ id, title, price, image }) => {
  const dispatch = useDispatch();

  return (
    <div className="menu-card">
      <div className="card-info-container">
        <div className="card-info">
          <h3>{title}</h3>
          <p>${price}</p>
          <div className="menu-quantity">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <button
              className="primary-button"
              onClick={() =>
                dispatch(
                  addItem({
                    id,
                    title,
                    image,
                    price,
                  })
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
        <img alt="pizza deal" src={image}></img>
      </div>
    </div>
  );
};

export default MenuCard;
