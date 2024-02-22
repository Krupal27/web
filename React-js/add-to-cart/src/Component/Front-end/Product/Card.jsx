import React from 'react';

const Card = ({ item, addtocart }) => {
    // console.log(item);
    const { name, price, amount, img } = item
    return (
        <>

            {/* <h3>Card</h3> */}
            <div className="card-wrapper col-22">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className='card-text'>
                    <h4>{name}</h4>
                    <h3>Price {price}-RS</h3>
                    <h3>{amount}</h3>
                    <button onClick={() => addtocart(item)}>Add to Cart</button>
                </div>
            </div>

        </>
    );
}

export default Card;