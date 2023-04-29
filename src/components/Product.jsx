import React from 'react'
import { dishes } from '../constants'

const Product = () => {
    return (
        <section className="product" id="menu">

            <h2 className="section-title">Most popular dishes</h2>

            <p className="section-text">
                Consectetur numquam poro nemo veniam
                eligendi rem adipisci quo modi.
            </p>

            <div className="products-grid">
                {
                    dishes.map((nav) => (
                        <div className="product-card">

                            <div className="img-box">
                                <img src={nav.img} alt="product image" className="product-img" width="200" loading="lazy" />

                                <div className="card-badge green">
                                    <ion-icon name="leaf"></ion-icon>
                                    <p>{nav.badge}</p>
                                </div>
                            </div>

                            <div className="product-content">

                                <div className="wrapper">
                                    <h3 className="product-name">{nav.title}</h3>

                                    <p className="product-price">
                                        <span className="small">$</span> {nav.price}
                                    </p>
                                </div>

                                <p className="product-text">
                                   {nav.text}
                                </p>

                                <div className="product-rating">
                                    {/* <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon> */}
                                </div>

                            </div>

                        </div>
                    ))
                }
                <div>



                </div>



            </div>

            <button class="btn btn-primary btn-icon">
                <img src="./assets/images/menu.svg" alt="menu icon" />
                Full menu
            </button>

        </section>
    )
}

export default Product