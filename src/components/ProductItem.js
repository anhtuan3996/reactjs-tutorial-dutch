import React from 'react'


function ProductItem(props) {
    function buyNow(text) {
        console.log(text)
    }
    return(
        <li className="product__item">
            <img src={props.image} alt="Product" />
            <div className="product__attribute">
                <p className="product__name">{ props.name }</p>
                <p className="product__price">{ props.price } vnđ</p>
            </div>
            <div><button onClick={ () => {buyNow('BUY NOW')} }>Buy Now</button></div>
        </li>
    )
}

export default ProductItem