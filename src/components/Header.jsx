import React from 'react'
import { navLinks, cartList } from '../constants'
import { logo, cart} from '../assets'

const Header = () => {
  return (
    <header>

      <nav className="navbar">

        <div className="navbar-wrapper">

          <a href="#">
            <img src={logo} alt="logo" width="130" />
          </a>
          
          

          <ul className="navbar-nav">   
            {
              navLinks.map((nav) => (
                <li key={nav.id}>
                  <a className='nav-link'> {nav.title}</a>
                </li>
              ))
            }
          </ul>

          <div className="navbar-btn-group">

            <button className="shopping-cart-btn">
              <img src={cart} alt="shopping cart icon" width="18" />
              <span className="count">5</span>
            </button>

            <button className="menu-toggle-btn">
              <span className="line one"></span>
              <span className="line two"></span>
              <span className="line three"></span>
            </button>

          </div>

        </div>

      </nav>

      <div className="cart-box">

        <ul className="cart-box-ul">

          <h4 className="cart-h4">Your order.</h4>

          {
            cartList.map((nav) => (
              <li key={nav.id}>
                <a href="#" className="cart-item">
                  <div className="img-box">
                    <img src={nav.img} alt="product image" className="product-img" width="50" height="50"
                      loading="lazy" />
                  </div>

                  <h5 className="product-name">{nav.title} </h5>
                  <p className="product-price">
                    <span className="small">$</span>{nav.price}
                  </p>
                </a>
              </li>
            ))
          }



        </ul>

        <div className="cart-btn-group">
          <button className="btn btn-secondary">View order</button>
          <button className="btn btn-primary">Checkout</button>
        </div>

      </div>

    </header>
  )
}

export default Header