

import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul>
                <li>
                    <NavLink to="/shopi">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all'>
                        All
                    </NavLink>
                </li> <li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    bryan@dwwife
                </li>
                <li>
                    <NavLink to='/MyOrders'>My Orders</NavLink>
                </li> <li>
                    <NavLink to='/MyAccount'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Signin'>
                        Signin
                    </NavLink>
                </li>
                <li>
                    compras
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
