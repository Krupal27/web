import React from 'react';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className="container">
                        <div className="row jcs align">
                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="nav-links">
                                <ul>
                                    <li><Link className='link'>Product</Link></li>
                                    <li><Link className='card-icon'><i class="fa-solid fa-cart-shopping"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
}

export default Navbar;