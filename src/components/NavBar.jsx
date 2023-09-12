import CartWidget from "./CartWidget";
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = () => {

    return (
        <nav className="nav">
            <NavLink to='/'><img src="/product_img/tuf4.png" alt="NicSoft" className="nav-logo" /></NavLink>
            <ul className="nav-menu">
                <NavLink className='nav-link' to='/'>Productos</NavLink>
                <NavLink className='nav-link' to='/category/laptops'>laptops</NavLink>
                <NavLink className='nav-link' to='/category/celulares'>Celulares</NavLink>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;