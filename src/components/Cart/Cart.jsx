import { useEffect } from "react";
import './cart.css'
import { storeLogo } from "../Navbar/import";
import { useSelector } from "react-redux";

function Cart () {
    const productCart = useSelector(state => state.productCart)

    useEffect(() => {
        document.title = 'Cart';
    }, [])
    return(
        <>
            <div className="container">
                <h1 className="summary border shadow">Checkout Summary: </h1>
            </div>

            {
                productCart.map(
                    cartItem => {
                        return (
                            <div className="container checkout_items">
                                <img src={ cartItem.image } style={{
                                    width: '10rem', height: '10rem'
                                }} alt="" />
                                <p>{ cartItem.title }</p>
                                <p>Price: ₱{ cartItem.price }</p>
                                <p>Quantity: { cartItem.count }</p>
                                <button className="buttons">Remove</button>
                            </div>
                        )
                    }
                )
            }
        </>
    )
}

export default Cart