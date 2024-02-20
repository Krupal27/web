import React from 'react';

const Card = (props) => {
    return (
        <>

            {/* <h3>Cart</h3> */}

            <div className="card-wrapper">
                <div className="card-img">
                    <img src={props.image} alt="" />
                </div>
                <div className='card-text'>
                    <h4>Addidas</h4>
                    <h3>Cartoon Astronaut T-Shirts</h3>
                    <p>$78</p>
                    <button>Add to Cart</button>
                </div>
            </div>

        </>
    );
}

export default Card;