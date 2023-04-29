import React from 'react'
import { logofooter } from '../assets'

const Footer = () => {
  return (
    <footer>

      <div className="footer-wrapper">

        <div>
          <img src={logofooter} alt="logo" class="footer-brand" width="130" />
        </div>

        <div className="social-link">

          {/* <a href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>

          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>

          <a href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>

          <a href="#">
            <ion-icon name="logo-youtube"></ion-icon>
          </a> */}

        </div>

        <p className="copyright">&copy; Copyright 2022 greatnesscodes. All Rights Reserved.</p>

      </div>

    </footer>
  )
}

export default Footer