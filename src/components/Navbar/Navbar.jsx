import { Link } from 'react-router-dom';
import { cartIcon, storeLogo } from './import.js';
import './navbar.css';
import './active.js';
import { useSelector } from 'react-redux';

function Navbar () {
    const cartItemCount = useSelector(state => state.cartItemCount)
    return (
        <>
        <div className="header">
            <div className="logo">
                <a href="#"><img src={ storeLogo } width={"150"} height={"60"} alt="store-logo" /></a>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" style={{textDecoration: 'none'}} className='nav_links active'>Home</Link></li>
                    <li><Link to="/products" style={{textDecoration: 'none'}} className='nav_links'>Products</Link></li>
                    <li><Link to="/cart" style={{textDecoration: 'none'}} className='nav_links'>Cart</Link></li>
                </ul>
            </nav>
            <div className="cart-icon">
                <span><img src={ cartIcon } width={25} alt="cart-icon" /></span>
                <span className='cart-counter'>{ cartItemCount }</span>
            </div>
        </div>
        </>
    )
}

export default Navbar