import React, { useState } from 'react';
import { useEffect } from 'react';

const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState()

    useEffect(() => {
        handlePrice();
    })

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    let handleremove = (id) => {
        // console.log("handleremove");
        const arr = cart.filter((item) => item.id !== id)
        setCart(arr)
    }

    return (
        <>

            <h3>Cart</h3>
            <article>
                {
                    cart.map((item) =>
                        <div className='cart_box'>
                            <div className="cart_img">
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <button>Increment</button>
                                <span><button>{item.amount}</button></span>
                                <button>Decrement</button>
                            </div>
                            <div className='item-price'>
                                <p>Rs -{item.price}</p>
                                <button onClick={() => handleremove(item.id)}>Remove</button>
                            </div>
                        </div>
                    )
                }
                <div className='total'>
                    <h4>Total Price</h4>
                    <h3>Rs - {price}</h3>
                </div>
            </article>


        </>
    );
}

export default Cart;