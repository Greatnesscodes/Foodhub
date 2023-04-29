import React from 'react'
import { menu, arrow,  ring, food1, food2, food3, dialog1, dialog2, circle } from '../assets'

const Hero = () => {
  return (
    <section className="home" id="home">

        <div className="home-left">

          <p className="home-subtext">Hi, new friend!</p>

          <h1 className="main-heading">We do not cook, we create your emotions!</h1>

          <p className="home-text">
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi
          </p>

          <div className="btn-group">

            <button className="btn btn-primary btn-icon">
              <img src={menu} alt="menu icon" />
              Our menu
            </button>

            <button className="btn btn-secondary btn-icon">
              <img src={arrow} alt="menu icon" />
              About us
            </button>

          </div>

        </div>

        <div className="home-right">

          <img src={food1} alt="food image" className="food-img food-1" width="200" loading="lazy" />
          <img src={food2} alt="food image" className="food-img food-2" width="200" loading="lazy" />
          <img src={food3} alt="food image" className="food-img food-3" width="200" loading="lazy" />

          <img src={dialog1} alt="dialog" className="dialog dialog-1" width="230" />
          <img src={dialog2} alt="dialog" className="dialog dialog-2" width="230" />

          <img src={circle} alt="circle shape" className="shape shape-1" width="25" />
          <img src={circle} alt="circle shape" className="shape shape-2" width="15" />
          <img src={circle} alt="circle shape" className="shape shape-3" width="30" />
          <img src={ring} alt="ring shape" className="shape shape-4" width="60" />
          <img src={ring} alt="ring shape" className="shape shape-5" width="40" />

        </div>

      </section>
  )
}

export default Hero