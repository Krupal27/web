import React from 'react';
import { Link } from 'react-router-dom';
// import image from "./logo.png"
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <header>
                <nav className='navbar'>
                    <div className="container">
                        <div className="row jcs align">
                            <div className="log">
                                {/* <h4>Logo</h4> */}
                                <img src={logo} alt="" />
                            </div>
                            <div className="nav-links">
                                <ul>
                                    <li><Link className='link' to="/home">Home</Link></li>
                                    <li><Link className='link' to="/product">Product</Link></li>
                                    <li><Link className='link' to="/blog">Blog</Link></li>
                                    <li><Link className='link' to="/about">About</Link></li>
                                    <li><Link className='link' to="/contact">Contact</Link></li>
                                    <li className='add_to_cars-logo'><Link><i class="fa-solid fa-cart-shopping" /></Link></li>
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