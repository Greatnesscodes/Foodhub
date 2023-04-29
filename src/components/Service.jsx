import React from 'react'
import { services } from '../constants'
const Service = () => {
  return (
    <section className="services" id="services">
      {services.map((nav) => (
        <div className="service-card">

        <p className="card-number">{nav.id}</p>

        <h3 className="card-heading">{nav.title}</h3>

        <p className="card-text">
          {nav.content}
        </p>

      </div>
      ))}

      </section>
  )
}

export default Service