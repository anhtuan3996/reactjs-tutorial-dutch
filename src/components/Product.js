import React from 'react'
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product1.jpg'
import ProductItem from './ProductItem'

function Product() {
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

    // let elements = products.map( (product, index) => {
    //     return <ProductItem image={product.image} key={index} name={product.name} price={product.price} />
    // })
    return(
        <div className="product">
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