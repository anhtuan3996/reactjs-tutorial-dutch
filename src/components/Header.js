import React from 'react'

import mainLogo from '../assets/images/logo.png'

console.log(mainLogo)

function Header() {
    return (
        <div>
            <div className="logo">
                <img src={mainLogo} alt="logo" />
            </div>
            <div className="category">
                <ul className="category__list">
                    <li className="category__item">
                        Khuyến mại
                    </li>
                    <li className="category__item">
                        Khuyến mại
                    </li>
                    <li className="category__item">
                        Macbook cũ
                    </li>
                    <li className="category__item">
                        Hàng CPO
                    </li>
                    <li className="category__item">
                        Hàng mới
                    </li>
                    <li className="category__item">
                        Phụ kiện
                    </li>
                    <li className="category__item">
                        Dịch vụ
                    </li>
                    <li className="category__item">
                        Trả góp
                    </li>
                    <li className="category__item">
                        Blog
                    </li>
                    <li className="category__item">
                        Bảo hành
                    </li>
                    <li className="category__item">
                        Về chúng tôi
                    </li>
                    <li className="category__item">
                        Liên hệ
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header