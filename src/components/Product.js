import React from 'react'
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product1.jpg'

function Product() {
    return(
        <div className="product">
            <ul className="product__list">
                <li className="product__item">
                    <img src={product1} alt="Product" />
                    <div className="product__attribute">
                        <p className="product__name">Sản phẩm 1</p>
                        <p className="product__price">30.000.000 vnđ</p>
                    </div>
                </li>
                <li className="product__item">
                    <img src={product1} alt="Product" />
                    <div className="product__attribute">
                        <p className="product__name">Sản phẩm 1</p>
                        <p className="product__price">30.000.000 vnđ</p>
                    </div>
                </li>
                <li className="product__item">
                    <img src={product1} alt="Product" />
                    <div className="product__attribute">
                        <p className="product__name">Sản phẩm 1</p>
                        <p className="product__price">30.000.000 vnđ</p>
                    </div>
                </li>
                <li className="product__item">
                    <img src={product1} alt="Product" />
                    <div className="product__attribute">
                        <p className="product__name">Sản phẩm 1</p>
                        <p className="product__price">30.000.000 vnđ</p>
                    </div>
                </li>
                <li className="product__item">
                    <img src={product2} alt="Product" />
                    <div className="product__attribute">
                        <p className="product__name">Sản phẩm 1</p>
                        <p className="product__price">30.000.000 vnđ</p>
                    </div>
                </li>
                <li className="product__item">
                    <img src={product2} alt="Product" />
                    <div className="product__attribute">
                        <p className="product__name">Sản phẩm 1</p>
                        <p className="product__price">30.000.000 vnđ</p>
                    </div>
                </li>
                <li className="product__item">
                    <img src={product2} alt="Product" />
                    <div className="product__attribute">
                        <p className="product__name">Sản phẩm 1</p>
                        <p className="product__price">30.000.000 vnđ</p>
                    </div>
                </li>
                <li className="product__item">
                    <img src={product2} alt="Product" />
                    <div className="product__attribute">
                        <p className="product__name">Sản phẩm 1</p>
                        <p className="product__price">30.000.000 vnđ</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Product