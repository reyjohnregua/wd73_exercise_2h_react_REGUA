import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import './product.css'

function Products () {
    const [products, setProducts] = useState([])

    useEffect(() => {
        document.title = 'Products';
    }, [])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                setProducts(data)
            })
    }, [setProducts])
    return(
        <>
        <div className="container">
        {
            products.map(product => <ProductItem 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                />)
        }
        </div>
        </>
    )
}

export default Products