import React from 'react';
import Card from './Card';
import img1 from "../assets/f1.jpg"
import img2 from "../assets/f2.jpg"
import img3 from "../assets/f3.jpg"
import img4 from "../assets/f4.jpg"
import img5 from "../assets/f5.jpg"
import img6 from "../assets/f6.jpg"
import img7 from "../assets/n1.jpg"
import img8 from "../assets/n2.jpg"
import img9 from "../assets/n3.jpg"
import img10 from "../assets/n4.jpg"
import img11 from "../assets/n5.jpg"

const Product = () => {
    return (
        <>

            <section className='sec-one'>
                <div className="container">
                    <div className="first-text">
                        <h3>Featured Products</h3>
                        <p>Summery Collection New Morden Design</p>
                    </div>
                    <div className='main-card'>
                        <div className='row jcs'>
                            <div className='col_22'>
                                <Card image={img1} />
                            </div>
                            <div className='col_22'>
                                <Card image={img2} />
                            </div>
                            <div className='col_22'>
                                <Card image={img3} />
                            </div>
                            <div className='col_22'>
                                <Card image={img3} />
                            </div>
                        </div>
                    </div>
                    <div className='main-card'>
                        <div className='row jcs'>
                            <div className='col_22'>
                                <Card image={img4} />
                            </div>
                            <div className='col_22'>
                                <Card image={img5} />
                            </div>
                            <div className='col_22'>
                                <Card image={img6} />
                            </div>
                            <div className='col_22'>
                                <Card image={img7} />
                            </div>
                        </div>
                    </div>
                    <div className='main-card'>
                        <div className='row jcs'>
                            <div className='col_22'>
                                <Card image={img8} />
                            </div>
                            <div className='col_22'>
                                <Card image={img9} />
                            </div>
                            <div className='col_22'>
                                <Card image={img10} />
                            </div>
                            <div className='col_22'>
                                <Card image={img11} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Product;