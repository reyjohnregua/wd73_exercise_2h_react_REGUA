import { useEffect } from "react"
import { storeLogo } from '../Navbar/import.js'
import './product.css'
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartItemCounter.js"
import { addProductToCart } from "../../store/productCart.js"

function ProductItem (props) {
    const { id, title, price, description, image } = props
    const dispatch = useDispatch()

    function onClick () {
        dispatch (addToCart())
        dispatch (addProductToCart({
            image,
            id,
            title,
            price
        }))
    }
    return(
        <>
            <div className="card" style={{width: '30rem'}}>
                <img src={image} className="card-img-top" alt="..." style={{height: '30rem'}} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bold">Price: ₱{price}</p>
                    <a href="#" onClick={onClick} className="btn btn-primary mt-auto">Add to cart</a>
                </div>
            </div>
        </>
    )
}

export default ProductItem