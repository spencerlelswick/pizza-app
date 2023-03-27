import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, Outlet } from "react-router-dom";


import './Layout.css';

const Layout = () => {

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
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                    <p>$10.49</p>
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