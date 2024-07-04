import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Navlink to='/shopi'>
                       Shopi
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/all'>
                       All
                    </Navlink>
                </li> <li>
                    <Navlink to='/clothes'>
                       Clothes
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/electronics'>
                       Electronics
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/furnitures'>
                       Furnitures
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/toys'>
                       Toys
                    </Navlink>
                </li>
                <li>
                    <Navlink to='/others'>
                        Others
                    </Navlink>
                </li>
            </ul>
        </nav>
    )
}