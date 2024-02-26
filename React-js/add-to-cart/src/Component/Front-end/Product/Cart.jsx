import React, { useEffect, useState } from 'react';

const Cart = ({ cart, setCart }) => {

    const [price, setPrice] = useState()
    useEffect(() => {
        handleprice()
    })

    let handleremove = (id) => {
        console.log("handleremove", id);
        let arr = cart.filter((item) => item.id !== id)
        setCart(arr)
    }

    let handleprice = () => {
        // console.log("handleprice");
        let ans = 0
        cart.map((item) => {
            ans += item.amount * item.price
        })
        setPrice(ans)
    }

    return (
        <>

            <h3>Cart</h3>
            {
                cart.map((item) => (
                    <div className="cart_box">
                        <div className="cart_img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className='cart_item'>
                            <h3>{item.name}</h3>
                        </div>
                        <div className='cart_btn'>
                            <button>Increment</button>
                            <button>{item.amount}</button>
                            <button>Decrement</button>
                        </div>
                        <div className='cart_price'>
                            <h4>Rs -{item.price}</h4>
                        </div>
                        <div className='remove_btn'>
                            <button onClick={() => handleremove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <div className='total-price'>
                    <h2>Total Price</h2>
                </div>
                <div>
                    <h2>Rs -{price}</h2>
                </div>
            </div>
        </>
    );
}

export default Cart;