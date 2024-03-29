import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='brand-name'>
                <NavLink exact activeClassName="active_class" to="/"><b>Shopping app</b></NavLink>
            </div>
            <div className='links-div'>
            <NavLink exact activeClassName="active_class" to="/">Home Page</NavLink>
            <NavLink exact activeClassName="active_class" to="/cart">Shopping Cart</NavLink>

            </div>
        </div>
    )
}

export default Navbar;