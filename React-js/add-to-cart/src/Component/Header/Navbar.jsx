import React from 'react';
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

const Navbar = ({ size, setShow }) => {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className="container">
                        <div className="row jcs align">
                            <div className="logo" onClick={() => setShow(true)}>
                                <img src={Logo} alt="" />
                            </div>
                            <div className="nav-links">
                                <ul>
                                    <li><Link className='link'>Home</Link></li>
                                    <li className='cart' onClick={() => setShow(false)}>
                                        <span><Link className='card-icon'><i class="fa-solid fa-cart-shopping"></i></Link></span>
                                        <span>{size}</span>
                                    </li>
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