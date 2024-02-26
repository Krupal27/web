import React, { useState } from 'react';
import Navbar from '../../Header/Navbar';
import Product from './Product';
import Cart from './Cart';

const Home = () => {

    const [cart, setCart] = useState([])
    const [warning, setWarning] = useState(false)
    const [show, setShow] = useState(true)

    let addtocart = (item) => {
        // console.log("addtocart", item);

        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id)
                isPresent = true;
        })
        if (isPresent) {
            setWarning(true)
            setTimeout(() => {
                setWarning(false)
            }, 2000);
            return;
        }
        setCart([...cart, item])

    }
    console.log(cart);

    return (
        <>
            <Navbar size={cart.length} cart={cart} setShow={setShow} />
            {
                warning && <h1 className='warning'>Your Item Already Add to Cart</h1>
            }
            <h3>Home</h3>
            {show ? <Product addtocart={addtocart} /> : <Cart cart={cart} setCart={setCart} />}

        </>
    );
}

export default Home;