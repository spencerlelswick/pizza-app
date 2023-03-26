import { Link, Outlet } from "react-router-dom";


const Layout = () => {

    return(
        <div>
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
                <li>
                    <Link to="/nothing-here">Nothing Here</Link>
                </li>
                </ul>
            </nav>

        <hr />
        <h1>test</h1>


        <Outlet />
        </div>
    )

}

export default Layout