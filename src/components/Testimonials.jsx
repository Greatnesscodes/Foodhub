import React from 'react'
import { testimonial } from '../constants'


const Testimonials = () => {
    return (
        <section className="testimonials" id="testimonials">

        <h2 className="section-title">What our customers say?</h2>

        <p className="section-text">
          Consectetur numquam poro nemo veniam
          eligendi rem adipisci quo modi.
        </p>

        <div className="testimonials-grid">

          {
            testimonial.map((nav) => (
                <div className="testimonials-card">

            <h4 className="card-title">{nav.head}</h4>

            <div className="testimonials-rating">
              {/* <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon> */}
            </div>

            <p className="testimonials-text">
              {nav.text}
            </p>

            <div className="customer-info">
              <div className="customer-img-box">
                <img src={nav.img} alt="customer image" className="customer-img" width="100" loading="lazy" />
              </div>

              <h5 className="customer-name">{nav.name}</h5>
            </div>

          </div>
            ))
          }

        </div>

      </section>
    )
}

export default Testimonials