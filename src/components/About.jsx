import React from 'react'
import { aboutimage, signature, circle, ring } from '../assets'

const About = () => {
  return (
    <section className="about" id="about">

        <div className="about-left">

          <div className="img-box">
            <img src={aboutimage} alt="about image" className="about-img" width="250" />
          </div>

          <div className="abs-content-box">
            <div className="dotted-border">
              <p className="number-lg">17</p>
              <p className="text-md">Years <br /> Experience</p>
            </div>
          </div>

          <img src={circle} alt="circle shape" className="shape shape-6" width="20" />
          <img src={circle} alt="circle shape" className="shape shape-7" width="30" />
          <img src={ring} alt="ring shape" className="shape shape-8" width="35" />
          <img src={ring} alt="ring shape" className="shape shape-9" width="80" />

        </div>

        <div className="about-right">

          <h2 className="section-title">We are doing more than
            you expect</h2>

          <p className="section-text">
            Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia
            dolorem
            impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim dolorum, assumenda.
            Sapiente
            soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur neque vel itaque inventore eaque
            explicabo
            commodi maxime! Aliquam quasi, voluptates odio.
          </p>

          <p className="section-text">
            Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas
            enim
            obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea laborum.
          </p>

          <img src={signature} alt="signature" className="signature" width="150" />

        </div>

      </section>
  )
}

export default About