import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../../features/cartSlice'

function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={image} alt='item'/>
      <div className="cart-item__info">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cart-item__quantity'>
          <button className='primary-button'  onClick={() => dispatch(decreaseQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button className='primary-button'  onClick={() => dispatch(increaseQuantity(id))}>+</button>
        </div>
        <button
          className='cart-item__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem
