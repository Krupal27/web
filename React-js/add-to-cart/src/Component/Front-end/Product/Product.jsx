import React, { useState } from 'react';
import list from '../../Back-end/Data';
import Card from './Card';
import Navbar from '../../Header/Navbar';
import Cart from "./Cart"

const Product = () => {

    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false)
    const [show, setShow] = useState(true)

    let addtocart = (item) => {
        // console.log("addtocart", item);
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id) {
                isPresent = true;
            }
        })
        if (isPresent) {
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 2000);
            return;
        }
        setCart([...cart, item])
        console.log(cart);

    }

    return (
        <>

            {/* <h3>Product</h3> */}
            <Navbar size={cart.length} setShow={setShow} />

            {
                warning && <h1 className='warning'>Item Already Add In Cart</h1>
            }
            {
                show ? <section className='sec-one'>
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
                </section> : <Cart />
            }



        </>
    );
}

export default Product;