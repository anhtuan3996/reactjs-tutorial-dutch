import React from 'react'
import { useRef } from 'react'
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product1.jpg'
import ProductItem from './ProductItem'

function Product() {

    const textInput = useRef(null);


    const products = [
        {
            name: "Sản phẩm 1",
            price : 150000,
            image: product1
        },
        {
            name: "Sản phẩm 2",
            price : 150000,
            image: product1
        },
        {
            name: "Sản phẩm 3",
            price : 150000,
            image: product2
        },
        {
            name: "Sản phẩm 4",
            price : 150000,
            image: product2
        },
        {
            name: "Sản phẩm 5",
            price : 150000,
            image: product2
        }
    ]

    const search = () => {
        console.log( textInput.current.value, 'HHAA')
    }

    // let elements = products.map( (product, index) => {
    //     return <ProductItem image={product.image} key={index} name={product.name} price={product.price} />
    // })
    return(
        <div className="product">
            <div>
                <input className="input-search"  ref={textInput} />
                <button onClick={search}>Search</button>
            </div>
            <ul className="product__list">
                {
                    products.map( (product, index) => 
                        <ProductItem image={product.image} key={index} name={product.name} price={product.price} />
                    )
                }
            </ul>
        </div>
    )
}

export default Product