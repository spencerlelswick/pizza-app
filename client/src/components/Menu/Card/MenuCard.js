import Button from '../../Button/Button';
import './MenuCard.css';

const MenuCard = (props) => {
  return (
    <div className="menu-card">
      <div className="card-info-container">
        <div className="card-info">
          <h3>{props.title}</h3>
          <p>{props.price}</p>
          <div className="menu-quantity">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <Button text="Add To Order"></Button>
          </div>
        </div>
        <img alt="pizza deal" src={props.img}></img>
      </div>
    </div>
  );
};

export default MenuCard;
