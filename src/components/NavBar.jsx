import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav className="nav">
            <NavLink to='/logo.png'><img src="/logo.png" alt="" className="nav-logo" /></NavLink>
            <ul className="nav-menu">
                <NavLink className='nav-link' to='/'>Ver todo</NavLink>
                <NavLink className='nav-link' to='/category/laptops'>Laptops</NavLink>
                <NavLink className='nav-link' to='/category/telefonos'>Telefonos</NavLink>
                <NavLink className='nav-link' to='/category/monitor'>Monitores</NavLink>
            </ul>
            <NavLink className='nav-link' to='/cart'><CartWidget /></NavLink>
        </nav>
    )
}

export default NavBar;