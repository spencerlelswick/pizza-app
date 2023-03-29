import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link, Outlet } from "react-router-dom";

import './Layout.css';

const Layout = () => {
    const cart = useSelector((state) => state.cart)

    const getItemsInCart = () => {
        let totalItems = 0
        cart.forEach(item => {
            totalItems += item.quantity
        });
        return totalItems
    }

    return(
        <div>
            <div className='nav-container'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/deals">Deals</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                    </ul>
                </nav>
                <div className='cart-container'>
                    <p>{getItemsInCart() || 0}</p>
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                </div>
            </div>

            <hr />
            
            <div className='layout-container'>
                <Outlet />
            </div>
        </div>
    )

}

export default Layout