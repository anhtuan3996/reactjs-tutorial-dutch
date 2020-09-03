import React from 'react'

import mainLogo from '../assets/images/logo.png'


function Header() {
    const categories = [
        {id: 'km', name: 'Khuyến mãi' },
        {id: 'mbc', name: 'Macbook cũ' },
        {id: 'hcpo', name: 'Hàng CPO' },
        {id: 'hm', name: 'Hàng mới' },
        {id: 'hm', name: 'Hàng mới' },
        {id: 'pk', name: 'Phụ kiện' },
        {id: 'dv', name: 'Dịch vụ' },
        {id: 'dv', name: 'Trả góp' },
        {id: 'dv', name: 'Blog' },
        {id: 'dv', name: 'Bảo hành' },
        {id: 'dv', name: 'Về chúng tôi' },
        {id: 'dv', name: 'Liên hệ' }
    ]
    let elements = categories.map((category, index) => {
    return <li className="category__item" key={index}> {category.name} </li>
    })
    return (
        <div>
            <div className="logo">
                <img src={mainLogo} alt="logo" />
            </div>
            <div className="category">
                <ul className="category__list">
                    { elements }
                </ul>
            </div>
        </div>
    )
}

export default Header