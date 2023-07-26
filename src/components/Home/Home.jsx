import './home.css';
import { storeLogo } from '../Navbar/import.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home () {
    const navigate = useNavigate();

    function navigateProducts () {
        navigate('/products')
    }

    useEffect(() => {
        document.title = 'Home';
    }, [])
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 home-content">
                    <p className="home-content-p">
                        Easy to Order & Free Shipping
                    </p>
                    <h3 className="home-content-h3">
                        <span className='enjoy'>Enjoy</span> shopping to our website!
                    </h3>
                    <button onClick={ navigateProducts } className="button">Products</button>
                </div>
                <div className="col-lg-6 store_logo">
                    <img src={ storeLogo }alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home