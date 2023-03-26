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
                <div>
                    Cart
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