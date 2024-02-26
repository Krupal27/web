import React, { useState } from 'react';
import list from '../../Back-end/Data';
import Card from './Card';
import Navbar from '../../Header/Navbar';
import Cart from "./Cart"

const Product = ({addtocart}) => {

    return (
        <>

            {/* <h3>Product</h3> */}

            <section className='sec-one'>
                <div className="container">
                    <div className='first-text'>
                        <h3>Featured Products</h3>
                        <p>Summry Collection New Morden Design</p>
                    </div>
                    <div className='row jcs'>
                        {
                            list.map((item) => (
                                <Card item={item} addtocart={addtocart} />
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default Product;